import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { Link, BrowserRouter, Route } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className='max-w-screen-lg mx-auto items-center justify-center mt-10 mb-10 px-20 bg-white flow-root'>
        <div className='text-lynette-red float-left'>
            <h1 className="text-[30px]">Lynette design</h1>
        </div>
            <h1 className="text-[30px] float-right">About</h1>
        <div>
            
        </div>
    </div>
  )
}

export default NavBar
