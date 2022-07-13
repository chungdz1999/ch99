import React from 'react';
import { Route, Routes } from "react-router-dom";
import HiHi from './components';
import Header from './components/Header';
// import Scroll from './components/Scroll';
import ProductList from './features/Product';

function App() {
  return (
    <div>
      <Header />
      {/* <Image /> */}<br></br>
      <Routes>
        <Route path="/" element={<HiHi />} />
        <Route path="product/*" element={<ProductList />} />
      </Routes>
      {/* <Menu /> */}
      {/* <Scroll /> */}
    </div>

  );
}

export default App;
