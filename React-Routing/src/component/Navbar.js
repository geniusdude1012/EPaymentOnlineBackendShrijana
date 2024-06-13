import React from 'react'
// import back1 from "./assets/back1.avif"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (

    <nav className="flex px-1 border-b md:shadow-lg items-center relative" >
        <div className="text-lg font-bold md:py-0 py-8 px-3 ">
        <h2><b></b><span  className="badge bg-teal-500 text-Dark fs-8">E-pay</span></h2>
        
        </div>
        <ul className="md:px-1 ml-auto md:flex md:space-x-1 absolute md:relative top-full left-0 right-0">
        <NavLink to={"/"}>
    <li>
        <a href="#" className="flex md:inline-flex p-4 items-center hover:bg-gray-50 text-decoration-none">
            <span style={{ letterSpacing: '0.1em' }}>HOME</span>
        </a>
    </li>
</NavLink>
            <NavLink to={"/Login"}>
            <li>
                <a href="#" className="flex md:inline-flex p-4 items-center hover:bg-gray-50 text-decoration-none">
                    <span style={{ letterSpacing: '0.1em' }}>LOGIN</span>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/Register"}>
            <li>
                <a href="#" className="flex md:inline-flex p-4 items-center hover:bg-gray-50 text-decoration-none">
                    <span style={{ letterSpacing: '0.1em' }}>REGISTER </span>
                </a>
            </li>
            </NavLink>
             <NavLink to={"/Deposit"}>
            <li>
                <a href="#" className="flex md:inline-flex p-4 items-center hover:bg-gray-50 text-decoration-none">
                    <span style={{ letterSpacing: '0.1em' }}>TEAM</span>
                </a>
            </li>
            </NavLink>
            
            {/* <NavLink to={"/ForgetPassword"}>
            <li>
            
            <a href="#" className="flex md:inline-flex p-4 items-center hover:bg-green-60">
                    <span>RecoveryPassword</span>
                </a>
            </li>
            </NavLink> */}
        
        </ul>
        <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
    </nav>
  )
}

export default Navbar