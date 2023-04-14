import ProductCard from '../components/ProductCard';


const Home = (props) => {

  let shoes = props.shoes;

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