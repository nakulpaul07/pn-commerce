import React from "react";

import Index from "./component/Index";
import Shop from "./component/Shop";
import ShopDetail from "./component/ShopDetail";
import { Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ShopDetail" element={<ShopDetail />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
