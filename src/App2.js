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
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true);
    const url = process.env.PUBLIC_URL + '/assets/data.json';
    const getShopItem = async () => {
      const res = await axios.get(url);
      const mydata = res.data.slice(0, 100).map(
        it => {
          return {
            id: it.id,
            name: it.name,
            brend: it.brand,
            img: it.image_link,
            color: it.product_colors,
          }
        }
      )
      setShopItm(mydata);
      setLoading(false);
    }
    getShopItem();


  }, [])

  return (
    <>
      <Header />
      {
        loading ? <div>로딩붕</div> :

          <div >

            {
              shopItm.map(it => {
                return <ul>
                  <li>{it.id}</li>
                  <li>
                    <img src={it.img} alt="" onError={e => { e.target.src = process.env.PUBLIC_URL + '/assets/grafflogo.png'; e.target.onError = null; }} />
                  </li>
                  <li>
                    {
                      <ul>
                        {
                          it.color.slice(0, 5).map(color => <li style={{ display: 'inline-block', height: '10px', width: '10px', margin: '0 5px', background: color.hex_value }}></li>)
                        }
                      </ul>
                    }
                  </li>
                </ul>
              })
            }
          </div>

      }



      <Routes>
        <Route path='/list' element={<Main num={shopItm} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App