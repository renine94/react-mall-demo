import ProductCard from '../components/ProductCard';

import { useNavigate } from 'react-router-dom';


const Home = (props) => {
  const navigate = useNavigate()
  let shoes = props.shoes;

  let cardList = shoes.map((a, i) => {
      return (
        <ProductCard 
          shoes={shoes[i]} 
          i={i+1} 
          key={i} 
          // onClick={() => { navigate(`/detail/${i+1}`) }}
          // href="/asdf"
        />
      )
    })

  return (
    <>
      <div className="main-bg" />
      <div className="container">
        <div className="row">
          {cardList}
        </div>
      </div>
    </>
  );
};

export default Home;