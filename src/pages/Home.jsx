import { useState } from 'react';

import ProductCard from '../components/ProductCard';

import data from '../data';


const Home = () => {

  let [shoes] = useState(data);

  let cardList = shoes.map((a, i) => {
      return (
        <ProductCard shoes={shoes[i]} i={i+1} key={i} />
      )
    })

  return (
    <>
      <div className="main-bg" />
      <div className="container">
        <div className="row">{cardList}</div>
      </div>
    </>
  );
};

export default Home;