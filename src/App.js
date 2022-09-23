import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Customer from './component/Customer'
import Footer from './component/Footer'
import Header from './component/Header'
import Main from './pages/Main'
import ShopItm from './pages/ShopItm'
import ShopList from './pages/ShopList'

const App = () => {

  const [shopItm, setShopItm] = useState([]);
  useEffect(() => {
    const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    const getShopItem = async () => {
      const res = await axios.get(url);
      setShopItm(res.data);
    }
    getShopItem();
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ShopList shopItm={shopItm} />} />
        <Route path='/list/:id' element={<ShopItm shopItm={shopItm} />} />
      </Routes>
      {/* <ShopList shopItm={shopItm} /> */}

      <Customer />
      <Footer />
    </>
  )
}

export default App