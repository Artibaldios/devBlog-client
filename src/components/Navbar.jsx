import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  }

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="/logo.png" alt="Lama Logo" w={32} h={32} />
        <span>Dev Blog</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Change Hamburger Icon */}
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${open && "rotate-45"}`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${open && "opacity-0"}`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${open && "-rotate-45"}`}
            ></div>
          </div>
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen bg-[ivory] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link
            to="/"
            onClick={handleClick}
            className="hover:bg-primary hover:text-textColor rounded-full px-4 py-2"
          >
            Home
          </Link>
          <Link
            to="/posts?sort=trending"
            onClick={handleClick}
            className="hover:bg-primary hover:text-textColor rounded-full px-4 py-2"
          >
            Trending
          </Link>
          <Link
            to="/posts?sort=popular"
            onClick={handleClick}
            className="hover:bg-primary hover:text-textColor rounded-full px-4 py-2"
          >
            Most Popular
          </Link>
          <Link to="/login" onClick={handleClick}>
            <button className="py-2 px-4 rounded-3xl bg-primary text-textColor">
              Login 👋
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link
          to="/"
          className="hover:bg-secondary hover:text-textColor rounded-full px-4 py-2"
        >
          Home
        </Link>
        <Link
          to="/posts?sort=trending"
          className="hover:bg-secondary hover:text-textColor rounded-full px-4 py-2"
        >
          Trending
        </Link>
        <Link
          to="/posts?sort=popular"
          className="hover:bg-secondary hover:text-textColor rounded-full px-4 py-2"
        >
          Most Popular
        </Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-primary text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;