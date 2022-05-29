import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export function Navbar() {
  const router = useRouter();
  var useref = useRef();
  useEffect(() => {
    [...useref.current.children].map((child) => {
      child.getAttribute("find") === router.pathname
        ? setIconTop(child.offsetTop + child.clientHeight / 2 - 3)
        : null;
    });
  }, []);
  const [iconTop, setIconTop] = useState();
  const [showMenu, setShowMenu] = useState(true);
  function onClickMenu(e) {
    setIconTop(
      e.target.parentNode.offsetTop + e.target.parentNode.clientHeight / 2 - 3
    );
  }

  return (
    <>
      {/**Menuicon*/}
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={`flex flex-col w-10 h-6 z-[101] fixed right-5 items-end top-10 group transition-[width] duration-300 ease-in-out cursor-pointer`}
      >
        <div className="w-full h-1 mb-1 group-hover:w-6 bg-white transition-[inherit]"></div>
        <div className="w-6 h-1 mb-1 group-hover:w-full bg-white transition-[inherit]"></div>
        <div className="w-full h-1 group-hover:w-6 bg-white transition-[inherit]"></div>
      </div>
      <nav
        className={`w-20 h-screen flex fixed z-[100] bg-gray-900 bottom-0 right-0 transition-transform ease-in-out ${
          showMenu ? "translate-x-full" : ""
        }`}
      >
        {/**Circle that shows link active status */}
        <div
          className={`w-2 h-2 absolute bg-white rounded-xl left-1 transition-all duration-300 ease-in-out flex items-center justify-center`}
          style={{ top: iconTop }}
        >
          <div className="absolute w-2 h-2 animate-ping bg-white rounded-full"></div>
        </div>
        <ul
          ref={useref}
          className="flex flex-col h-screen w-full justify-center right-0"
        >
          {[
            ["Hjem", "/"],
            ["Kontakt", "/kontakt"],
            ["Om os", "/om-os"],
          ].map(([title, url]) => (
            <li
              key={url}
              className={`relative m-4 text-white text-center`}
              find={url}
              onClick={(e) => {
                onClickMenu(e);
                setTimeout(() => setShowMenu(!showMenu), 300);
              }}
            >
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
