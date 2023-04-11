import { useState } from 'react';

import './App.css';

import MyNavbar from './layouts/MyNavbar';
import ProductCard from './components/ProductCard';

import data from './data';


function App() {

  let [shoes] = useState(data);

  let cardList = shoes.map((a, i) => {
      return (
        <ProductCard shoes={a} i={i+1} key={i} />
      )
    })

  return (
    <div className="App">
      {/* Navbar */}
      <MyNavbar></MyNavbar>

      {/* Main Background Image */}
      <div className="main-bg"/>

      {/* 상품카드 목록 */}
      <div className='container'>
        <div className='row'>
          {cardList}
        </div>
      </div>

    </div>
  );
}

export default App;