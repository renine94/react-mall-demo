import ProductCard from '../components/ProductCard';

import axios from 'axios';
import { useState } from 'react';


const Home = (props) => {
  let [shoes, setShoes] = useState(props.shoes);
  let [clickCount, setClickCount] = useState(2);

  let cardList = shoes.map((a, i) => {
      return (
        <ProductCard 
          shoes={shoes[i]} 
          i={i+1} 
          key={i} 
        />
      )
    })

  let addShoes = async () => {
    await axios.get(`https://codingapple1.github.io/shop/data${clickCount}.json`)
          .then((res) => {
            console.log(`https://codingapple1.github.io/shop/data${clickCount}.json`)
            if (clickCount < 3) {
              setClickCount(++clickCount);
            } else {
              console.log('클릭횟수 3회 초과');
              return
            }
            setShoes([...shoes, ...res.data]);
            // remove Loading UI
          })
          .catch(() => {
            // remove Loading UI
          })
  }

  return (
    <>
      <div className="main-bg" />
      <div className="container">
        <div className="row">
          {cardList}
        </div>
      </div>
      <button onClick={() => { addShoes() }}>버튼</button>
    </>
  );
};

export default Home;