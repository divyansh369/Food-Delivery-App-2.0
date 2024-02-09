import React from 'react'
import DBHeader from '../components/DBHeader'
import { Route, Routes } from 'react-router-dom'
import DBHome from '../components/DBHome'
import DBOrders from '../components/DBOrders'
import DBItems from '../components/DBItems'
import DBNewItem from '../components/DBNewItem'
import DBUsers from '../components/DBUsers'

const DBRightSection = () => {
  return (
    <div className='flex flex-col py-12 px-12 flex-1 h-full bg-wback1'>
      <DBHeader/>
      <div className="flex flex-col flex-1 overflow-y-scroll scrollbar-none">
        <Routes>
          <Route path="/home" element={<DBHome/>}></Route>
          <Route path="/orders" element={<DBOrders/>}></Route>
          <Route path="/items" element={<DBItems/>}></Route>
          <Route path="/newItem" element={<DBNewItem/>}></Route>
          <Route path="/users" element={<DBUsers/>}></Route>
        </Routes>
      </div>

    </div>
  )
}

export default DBRightSection