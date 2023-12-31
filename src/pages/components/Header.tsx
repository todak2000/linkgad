/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/router";
import Image from "next/image";
import { Logo, navBarItems } from "@/constant";
import {MdOutlineClose} from 'react-icons/md'
const Header: React.FC = () => {
  const { push } = useRouter();

  const [showDropDown, setShowDropDown] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width > 768) {
      setShowDropDown(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleLink = (link: string) => {
    push(link);
  };

  return (
    <div className="bg-brand_primary  flex w-full flex-row items-center justify-between px-4 py-[40px]  md:px-[120px]">
      <div
        className="flex flex-shrink-0 cursor-pointer flex-row  items-center"
        onClick={() => handleLink("/")}
      >
        <Image src={Logo} alt="google logo" width={100} height={70} className="hidden md:flex"/>
        <Image src={Logo} alt="google logo" width={50} height={30} className="md:hidden flex"/>
      </div>
      {showDropDown ? 
      <MdOutlineClose 
      className="flex text-2xl text-red-500 md:hidden"
        onClick={handleClick}
      />
      :
      <RxHamburgerMenu
        className="flex text-lg text-green-900 md:hidden"
        onClick={handleClick}
      />
      }
      <div
        className={` ${
          showDropDown
            ? "absolute top-24 right-4 grid w-1/2 grid-cols-1 gap-4 bg-[#f9f9f9] py-4 drop-shadow-sm "
            : "hidden flex-row items-center md:flex"
        }`}
      >
        {navBarItems.map(({ id, route, name }) => {
          return (
            <p
              key={id}
              onClick={() => {
                handleLink(route);
              }}
              className="text-brand_primary_color cursor-pointer text-center text-[16px] font-normal leading-[22px] hover:bg-[#0000FF] hover:p-4 hover:font-bold hover:text-white md:mr-4 md:text-[#3A3A3A]"
            >
              {name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Header);
