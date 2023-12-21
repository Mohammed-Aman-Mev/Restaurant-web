import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Blog,
  ContactPage,
  Gallery,
  Home,
  Landing,
  Shop,
  ShopingCard,
  Team,
} from "./Pages";
import { Navbar, Navigate } from "./components";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (toggle) setToggle(false);
    else setToggle(true);
  };

  return (
    <BrowserRouter>
      <Navbar handleToggle={handleToggle} toggle={toggle} />
      <Navigate handleToggle={handleToggle} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shopingcard" element={<ShopingCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
