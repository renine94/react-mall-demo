import { useParams } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();

  let shoe = props.shoes.find(item => item.id === id-1);

  // 상품이 없으면
  if (!shoe) {
    return (
      <h1>존재하지 않는 상품입니다.</h1>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${id}.jpg`} width="100%" alt={id}/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  );
};

export default Detail;
