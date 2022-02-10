import React from 'react'
import {Link} from 'react-router-dom';
import LogoM from './imgs/timegrid.PNG'
function Header() {
    return (
       
        <div className="header1 w-screen">
           <nav className="fixed flex w-full bg-white shadow p-0 top-0 items-center animated z-20">
           {/* <div className="py-1"><img src={logo} alt="logo" /></div> */}
             <div className="flex py-1 mx-8"> 
             <img src={LogoM} alt="tuza logo" width="140px" height="140px" /> </div>
             <ul className="hidden sm:flex text-xl-2 flex-1 py-4 mt-1 justify-end items-center gap-12 text-blue-600 text-center font-bold">
                 <Link to="/" className="cursor-pointer">Workspaces</Link>
                 <Link to="Dashboard" className="cursor-pointer">Starred</Link>
                 <Link to="Login" className="cursor-pointer ">Login</Link>
              <button type="button" className=" bg-blue-600 py-2  text-white rounded-md px-7 mr-2 text-xl-2 transform transition-all hover:scale-110 duration-100"><Link to="/Land" >Home</Link></button>
             </ul>
             
           </nav>
           
        </div>
     )
    }
    
export default Header
