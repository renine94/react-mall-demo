import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

import styled from "styled-components";


let Btn = styled.button`
  background: ${ props => props.bg };
  color: ${ props => ["blue", "purple"].includes(props.bg) ? 'white' : 'black' };
  padding: 10px;
`

function TabContent({tab}) {
    let tabs = [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>]

    let [fade, setFade] = useState('');

    useEffect(() => {
      setTimeout(() => { setFade('end') }, 100);

      return () => {
        setFade('')
      }
    }, [tab])

    return (
      <div className={`start ${fade}`}>
      { tabs[tab] }
      </div>
    )
}


const Detail = (props) => {
  let { id } = useParams();
  let shoe = props.shoes.find(item => item.id === id-1);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState('');

  useEffect(() => {
      setTimeout(() => { setFade('end') }, 100);

      return () => {
        setFade('')
      }
    }, [tab])

  // Lifecycle Hook (렌더링이 다 되고나서, 실행된다.)
  useEffect(() => {
    let b = setTimeout(() => {setAlert(false);}, 5000)
    console.log(1);

     // useEffect 안에 있는 코드가 실행되기전에 실행하는 코드
    return () => {
      console.log('useEffect 가 실행되기 전에 실행되는 코드')
      clearTimeout(b);
    }
  }, [])  // mount 될때만 1회만 실행되도록 [] (vue.js) 의 watch와 비슷하다.
  
  // useEffect(() => {})       // 재렌더링마다 코드 실행하고싶을때,
  // useEffect(() => {}, [])   // mount시 1회 코드 실행하고 싶으면
  // useEffect(() => {
  //   return () => {
  //     // unmount시 1회 코드실행하고 싶을때,
  //   }
  // }, [])

  useEffect(() => {
    if (isNaN(num) === true) {
      console.log("숫자만 입력하세요.")
    }
  }, [num])


  // 상품이 없으면
  if (!shoe) {
    return (
      <h1>존재하지 않는 상품입니다.</h1>
    )
  }

  return (
    <div className={`container start ${fade}`}>
      {
        alert === true
        ? <div className="alert alert-warning">
            5초 이내 구매시 할인
          </div>
        : null
      }

      { count }
      <Btn bg="yellow" onClick={() => { setCount(count++) }}>버튼</Btn>

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${id}.jpg`} width="100%" alt={id}/>
        </div>
        <div className="col-md-6">
          <input type="text" onChange={(e) => setNum(e.target.value) }></input>
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => {setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => {setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => {setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div> 
  );
};

export default Detail;
