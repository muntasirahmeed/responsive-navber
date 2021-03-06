import React, { useState } from "react";
import logo from "../images/logos/logo.png";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="container ">
      <div className="flex items-center  py-[12px] md:py-2 ">
        <div className="flex-1">
          <img
            onClick={() => navigate("/")}
            className="h-10 cursor-pointer"
            src={logo}
            alt=""
          />
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <XIcon className="w-10 h-10 absolute right-3 top-[12px] cursor-pointer md:hidden"></XIcon>
          ) : (
            <MenuAlt1Icon className="w-10 h-10 absolute right-3 top-[12px] cursor-pointer md:hidden"></MenuAlt1Icon>
          )}
        </div>
        <div
          className={`flex-1 flex flex-col p-4 md:p-0 rounded-b-lg  md:flex-row justify-end  transition-all duration-500 ease-in-out space-x-1 absolute md:static   md:z-auto z-[2] right-0 w-1/2 md:w-full  space-y-2 md:space-y-0  ${
            open
              ? "top-16 opacity-100 bg-white transition-all ease-out"
              : "top-[-490px] md:opacity-100 opacity-0 transition-all ease-in"
          }`}
        >
      
            
              
              <button className=" px-5 font-semibold rounded py-1 hover:bg-gray-200 ">Home</button>
              <button className=" px-5 font-semibold rounded py-1 hover:bg-gray-200 ">Services</button>
              <button className=" px-5 font-semibold rounded py-1 hover:bg-gray-200 ">Contact</button>
              <button className=" px-5 font-semibold rounded py-1 hover:bg-gray-200 ">About</button>
              <button className=" px-5 font-semibold rounded py-1 hover:bg-gray-200 bg-black text-white">Login</button>
            
        </div>
      </div>
    </nav>
  );
};

export default Navber;
