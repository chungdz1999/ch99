import React from 'react';
import { Route, Routes } from "react-router-dom";
import HiHi from './components';
import Header from './components/Header';
import Slide from './components/Slide';
import ProductList from './features/Product';

function App() {

  // const [productList, setProductList] =useState([]);


  // useEffect(() => {
  //   const fetchProductList = async () => {
  //     try {
  //       const params = {
  //         _page: 1,
  //         _limit: 10,
  //       };
  //       const response = await productApi.getAll(params);
  //       console.log(response);
  //     } catch (error) {
  //       console.log('fail ', error);
  //     }
  //   }

  //   fetchProductList();
  // }, []);

  return (
    <div>
      <Header />
      {/* <Slide /> */}
      {/* <Image /> */}
      <Routes>
        <Route path="/" element={<HiHi />} />
        <Route path="product/*" element={<ProductList />} />
      </Routes>
      {/* <Menu /> */}
    </div>

  );
}

export default App;
