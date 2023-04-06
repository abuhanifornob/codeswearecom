import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log("hey i am useeffect is ready");
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem(JSON.stringify("cart", myCart));
    let sub = 0;
    const keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      sub += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(sub);
  };
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in newCart) {
      newCart[itemCode].qty = newCart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const clearCart = () => {
    setCart({});
    saveCart({});
  };
  const removeFormCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in newCart) {
      newCart[itemCode].qty = newCart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  return (
    <>
      <Navbar
        addToCart={addToCart}
        removeFormCart={removeFormCart}
        subTotal={subTotal}
        cart={cart}
        clearCart={clearCart}
      />
      <Component
        addToCart={addToCart}
        removeFormCart={removeFormCart}
        subTotal={subTotal}
        cart={cart}
        clearCart={clearCart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
