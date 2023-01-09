import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import HeaderMenu from "./HeaderMenu";
import OverlayCurtain from "./OverlayCurtain";

const Header = () => {
  const { pathname } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // deps(dependency 배열)를 2번째 인자로 넣어주면 해당 값이 변할때만 1번째 인자의 값이 실행된다.(여기선 return문)
  useEffect(() => {
    document.body.className = isMenuOpen ? "isMenuOpen" : "";
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="border-b sticky top-0 bg-white/40 backdrop-blur-md z-20">
        <div className="p-4 flex flex-row justify-between max-w-4xl mx-auto">
          <button
            className="p-1 hover:bg-gray-200 rounded-lg"
            onClick={() => setIsMenuOpen(true)}
          >
            <span>
              <AiOutlineMenu size="2rem" />
            </span>
          </button>
          <Link href={"/"}>
            <h1 className="font-bold text-2xl cursor-pointer select-none">
              Notion Blog
            </h1>
          </Link>
          <button className="p-1 hover:bg-gray-200 rounded-lg">
            <span>
              <AiOutlineSearch size="2rem" />
            </span>
          </button>
        </div>
      </header>
      <HeaderMenu isMenuOpen={isMenuOpen} />
      {isMenuOpen ? (
        <OverlayCurtain onClick={() => setIsMenuOpen(false)} />
      ) : null}
    </>
  );
};

export default Header;