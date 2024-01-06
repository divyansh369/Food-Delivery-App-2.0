import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { avatar, logo } from "../assets";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { motion } from "framer-motion";
import { buttonClick, slideTop } from "../animation";
import { MdLogout, MdShoppingCart } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setUserNull } from "../context/actions/userActions";
import MainLoader from "./MainLoader";

const Header = () => {
  const user = useSelector((state) => state.user);

  const [isMenu, setIsMenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNull());
        navigate("/login", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <header className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6">
      <NavLink to={"/"} className="flex items-center justify-center gap-4">
        <img src={logo} className="w-12" alt="" />
        <p className="font-semibold text-xl text-wtextColor">City</p>
      </NavLink>

      <nav className="flex items-center justify-center gap-8 text-wtextColor">
        <ul className="hidden md:flex items-center justify-center gap-16 ">
          <NavLink
            className= {({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            } 
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/menu"}
          >
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/aboutus"}
          >
            About Us
          </NavLink>
        </ul>

        <motion.div
          {...buttonClick}
          className="relative cursor-pointer"
        >
          <MdShoppingCart className="text-3xl text-wtextColor" />
            <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center absolute -top-4 -right-1">
              <p className="text-black text-base font-semibold">2</p>
            </div>
        </motion.div>

        {user ? (
          <>
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsMenu(true)}
            >
              <div className="w-12 h-12 rounded-full shadow-md cursor-pointer overflow-hidden flex items-center justify-center">
                <motion.img
                  className="w-full h-full object-cover"
                  src={user?.picture ? user?.picture : avatar}
                  whileHover={{ scale: 1.15 }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {isMenu && (
                <motion.div
                  {...slideTop}
                  onMouseLeave={() => setIsMenu(false)}
                  className="px-6 py-4 w-48 bg-white backdrop-blur-md rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-4"
                >
                
                    <Link
                      className=" hover:text-yellow-600 text-xl text-black"
                      to={"/dashboard/home"}
                    >
                      Dashboard
                    </Link>

                  <Link
                    className=" hover:text-yellow-600 text-xl text-black"
                    to={"/profile"}
                  >
                    My Profile
                  </Link>
                  <Link
                    className=" hover:text-yellow-600 text-xl text-black"
                    to={"/user-orders"}
                  >
                    Orders
                  </Link>
                  <hr />

                  <motion.div
                    {...buttonClick}
                    onClick={signOut}
                    className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-yellow-300 hover:bg-yellow-400 gap-3"
                  >
                    <MdLogout className="text-2xl text-black group-hover::text-black" />
                    <p className="text-black text-xl group-hover:text-black">
                      Sign Out
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>
              <motion.button
                {...buttonClick}
                className="px-4 py-2 rounded-md shadow-md bg-lightOverlay border border-yellow-500 cursor-pointer"
              >
                Login
              </motion.button>
            </NavLink>
          </>
        )}
      </nav>
      

    </header>
  );
};

export default Header;
