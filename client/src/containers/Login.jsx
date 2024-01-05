import React, { useEffect, useState } from "react";
import { loginback7, logo } from "../assets";
import LoginInput from "../components/LoginInput";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons/index";
import { motion } from "framer-motion";
import { buttonClick } from "../animation";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setUsersDetails} from '../context/actions/userActions'


import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
import {app} from '../config/firebase.config'
import { validateUserJWTToken } from "../api/index.";


const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setisSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if(user){
      navigate("/",{replace:true})
    }

  }, [user])

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth,provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged(cred => {
        if(cred){
          cred.getIdToken().then(token => {
            validateUserJWTToken(token).then(data => {
              dispatch(setUsersDetails(data));
            }) 
            navigate("/",{replace:true})
          })
        }
      })
    })
  };

  const signUpWithEmailPass =async () => {
    if(userEmail  === '' || password  === '' || confirm_password === ''){
      console.log('they are empty');
    }else{
      if(password === confirm_password){
        setUserEmail("");
        setPassword("");
        setConfirm_password("");
        await createUserWithEmailAndPassword(firebaseAuth,userEmail,password).then(userCred => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if(cred){
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  dispatch(setUsersDetails(data));
                })
                navigate("/",{replace:true})

              })
            }
          })
        })
      }else{
        //alert pass
      }
    }
  }


  const signInWithEmailPass = async () => {
    if(userEmail !== "" && password !== ""){
      await signInWithEmailAndPassword(firebaseAuth,userEmail,password).then(userCred => {
        firebaseAuth.onAuthStateChanged((cred) => {
          if(cred){
            cred.getIdToken().then((token) => {
              validateUserJWTToken(token).then((data) => {
                dispatch(setUsersDetails(data));
              })
              navigate("/",{replace:true})
            })
          }
        })
      })
    }else{
      //alert message
    }
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* background image */}
      <img
        src={loginback7}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* content box */}
      {/* <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6"> */}
      <div className="flex flex-col items-center bg-opacity-50 bg-black w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6 rounded-lg shadow-lg">
        {/* logo section */}
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={logo} alt="" className="w-8" />
          <p className="text-white font-semibold text-3xl">city</p>
        </div>

        {/* welcome text */}
        <p className="text-3xl font-semibold text-wheadingColor">
          Welcome Back
        </p>
        <p className="text-xl text-wtextColor -mt-6">
          {isSignUp ? "Sign Up" : "Sign In"} with following
        </p>

        {/* {input section} */}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeHolder={"Email Here"}
            icon={<FaEnvelope className="text-xl text-white" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />
          <LoginInput
            placeHolder={"Password Here"}
            icon={<FaLock className="text-xl text-white" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeHolder={"Confirm Password Here"}
              icon={<FaLock className="text-xl text-white" />}
              inputState={confirm_password}
              inputStateFunc={setConfirm_password}
              type="password"
              isSignUp={isSignUp}
            />
          )}

          {!isSignUp ? (
            <p className="text-white">
              Don't have an account:{" "}
              <motion.button
                {...buttonClick}
                className="text-yellow-400 underline cursor-pointer bg-transparent"
                onClick={() => setisSignUp(true)}
              >
                Create one
              </motion.button>
            </p>
          ) : (
            <p className="text-white">
              Already have an account:
              <motion.button
                {...buttonClick}
                className="text-yellow-400 underline cursor-pointer bg-transparent"
                onClick={() => setisSignUp(false)}
              >
                Sign-in here
              </motion.button>
            </p>
          )}

          {/* button */}
          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md font-semibold bg-yellow-300 cursor-pointer text-black text-xl capitalize hover:bg-yellow-400 transition-all duration-150"
              onClick={signUpWithEmailPass}
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              onClick={signInWithEmailPass}
              className="w-full px-4 py-2 rounded-md font-semibold bg-yellow-300  text-black hover:bg-yellow-400 cursor-pointer text-xl capitalize  transition-all duration-150"
            >
              Sign In
            </motion.button>
          )}
        </div>

        <div className="flex items-center justify-between gap-16">
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
          <p className="text-white">or</p>
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
        </div>

        <motion.div
          {...buttonClick}
          className="flex items-center justify-center px-20 py-2 bg-cardOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4"
          onClick={loginWithGoogle}
        >
          <FcGoogle className="text-3xl " />
          <p className="capitalize text-base text-white">Sign-in With Google</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
