import React, { useState } from "react";
import logo from "./../assets/Images/logo.svg";
import user from "./../assets/Images/user.png";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import Headeritem from "./Headeritem";

const Header = () => {
    const [toggle, setToggle] = useState(false)
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex justify-between items-center px-5 py-3">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[80px] md:w-[95px] object-cover mr-5" />
        <div className="hidden md:flex gap-8">
        {menu.map((item) => (
          <Headeritem name={item.name} Icon={item.icon} />
        ))}
        </div>
        <div className="md:hidden flex gap-5">
        {menu.map((item, index) =>index<3 &&  (
          <Headeritem name={''} Icon={item.icon} />
        ))}
        <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <Headeritem name={''} Icon={HiDotsVertical}/>
           {toggle? <div className="absolute mt-2 bg-[#121212] p-3 px-5 py-4 border-[1px] border-gray-700">
            {menu.map((item, index) =>index>2 &&  (
          <Headeritem name={item.name} Icon={item.icon} />
        ))}
            </div>:null}
        </div>
        </div>
      </div>
      <img src={user} className="w-[40px] rounded-full" />
    </div>
  );
};

export default Header;
