import React from 'react'
import { isActiveStyles, isNotActiveStyles } from '../utils/styles'
import { NavLink } from 'react-router-dom'
import { logo } from '../assets'

const DBLeftSection = () => {
  return (
    <div className='h-full py-12 flex flex-col bg-wback backdrop-blur-md shadow-md min-w-210 w-300 gap-3'>
      <NavLink to={"/"} className="flex items-center justify-start gap-4">
        <img src={logo} className="w-12" alt="" />
        <p className="font-semibold text-xl text-wtextColor">City</p>
      </NavLink>
      <hr/>

      <ul className='flex flex-col gap-4'>
      <NavLink
            className= {({ isActive }) =>
              isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-yellow-300` : isNotActiveStyles
            } 
            to={"/dashboard/home"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-yellow-300` : isNotActiveStyles
            }
            to={"/dashboard/orders"}
          >
            Orders
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-yellow-300` : isNotActiveStyles
            }
            to={"/dashboard/items"}
          >
            Items
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-yellow-300` : isNotActiveStyles
            }
            to={"/dashboard/newItem"}
          >
            Add New Items
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-yellow-300` : isNotActiveStyles
            }
            to={"/dashboard/user"}
          >
            Users
          </NavLink>

      </ul>

      <div className="w-full items-center justify-center flex h-225 mt-auto px-3 ">
        <div className="w-full h-full rounded-md bg-wback1 flex items-center justify-center flex-col gap-3 px-3">
          <div className="w-12 h-12 border bg-white rounded-full flex items-center justify-center">
            <p className="text-2xl font-bold text-wback">?</p>
          </div>
          <p className="text-xl text-primary font-semibold">Help Center</p>
          <p className="text-base text-gray-300 text-center">Having toubble in city. Please contact us for more questions</p>
          <p className="px-4 py-2 rounded-full bg-textColor text-wback cursor-pointer">Get in touch</p>

        </div>
      </div>

    </div>
  )
}

export default DBLeftSection