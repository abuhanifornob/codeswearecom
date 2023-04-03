import React, { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();
  return (
    <>
      <header className="text-gray-600 body-font shadow-xl sticky top-0">
        <div className="flex flex-wrap p-5 flex-col md:flex-row md:justify-start items-center">
          <div className="logo">
            <Link
              href="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <Image src={"/logo.png"} width={200} height={40} />
            </Link>
          </div>
          <div className="nav md:ml-10">
            <nav className="md:ml-auto flex flex-wrap items-center justify-center text-md md:text-2xl md:font-bold">
              <Link href="/tshirt" className="mr-5 hover:text-gray-900">
                T-Shirt
              </Link>
              <Link href="/hoodis" className="mr-5 hover:text-gray-900">
                Hoodis
              </Link>
              <Link href="/sticker" className="mr-5 hover:text-gray-900">
                Sticker
              </Link>
              <Link href="/mugs" className="mr-5 hover:text-gray-900">
                Mugs
              </Link>
            </nav>
          </div>
          <div
            onClick={toggleCart}
            className="card absolute right-2 top-4 cursor-pointer"
          >
            <AiOutlineShoppingCart className="text-4xl" />
          </div>
          <div
            ref={ref}
            className="sideCart absolute top-0 right-0 bg-amber-200 w-96  py-8 px-8 z-50 transform transition-transform translate-x-full"
          >
            <h1 className="font-bold text-xl text-center">Shopping Cart</h1>
            <span
              onClick={toggleCart}
              className="absolute top-1 right-2 cursor-pointer"
            >
              {" "}
              <AiFillCloseCircle className="text-pink-500 text-3xl" />
            </span>
            <ol className="list-decimal font-bold py-4">
              <li>
                <div className="flex">
                  <div className="flex w-2/3 py-4">Thisr Ware the Code</div>
                  <div className="w-1/3 flex justify-center items-center text-lg w-1/3">
                    <AiFillPlusCircle className="cursor-pointer text-pink-500 text-3xl" />{" "}
                    <span className="mx-2">1 </span>
                    <AiFillMinusCircle className="cursor-pointer text-pink-500 text-3xl" />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex">
                  <div className="flex w-2/3">
                    Thisr Ware the Code hsdf sdfjsidfj sdifjsidf{" "}
                  </div>
                  <div className="w-1/3 flex justify-center items-center text-lg w-1/3">
                    <AiFillPlusCircle className="cursor-pointer text-pink-500 text-3xl" />{" "}
                    <span className="mx-2">1 </span>
                    <AiFillMinusCircle className="cursor-pointer text-pink-500 text-3xl" />
                  </div>
                </div>
              </li>
            </ol>
            <div class="p-2 w-full flex">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-4  hover:bg-indigo-600 rounded text-lg">
                <BsFillBagCheckFill className="m-1" /> CheckOut
              </button>
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-4  hover:bg-indigo-600 rounded text-lg">
                ClearCart
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
