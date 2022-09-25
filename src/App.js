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

  const [shopItm, setShopItm] = useState();
  useEffect(() => {
    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json';
    const getShopItem = async () => {
      const res = await axios.get(url);
      const mydata = res.data.slice(0, 100).map(
        it => {
          return {
            id: it.id,
            name: it.name,
            brend: it.brand,
            img: it.image_link,
          }
        }
      )
      setShopItm(mydata);
    }
    getShopItem();

  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ShopList shopItm={shopItm} />} />
        {
          shopItm ? <Route path='/list/:id' element={<ShopItm shopItm={shopItm} />} />
            : <Route path='/list/:id' element={<div> Loading .... </div>} />
        }

      </Routes>
      {console.log(shopItm)}
      {/* <ShopList shopItm={shopItm} /> */}

      <Customer />
      <Footer />
    </>
  )
}

export default App