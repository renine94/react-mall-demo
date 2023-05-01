import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { addAge } from "../store/userSlice";
import { addCount } from "../store";
import { useState, memo, useMemo } from "react";


let Btn = styled.button`
  background: ${ props => props.bg };
  color: ${ props => ["blue", "purple"].includes(props.bg) ? 'white' : 'black' };
  padding: 10px;
`

let Child = memo(function() {
  console.log("Child 재렌더링됨");
  return <div>자식임</div>
})

function 함수() {
  return "";
}


const Cart = () => {
  let state = useSelector(state => state)
  let dispatch = useDispatch()
  let cartItems = state.cartItems;

  let [count, setCount] = useState(0);
  let result = useMemo(() => {return 함수()}, [state]); // 컴포넌트 렌더링시 1회 실행

  let cartItemsList = cartItems.map((cartItem, i) => {
    return (
      <tr key={i}>
        <td>{cartItem.id}</td>
        <td>{cartItem.name}</td>
        <td>{cartItem.count}</td>
        <td><Btn bg="white" onClick={() => {
          dispatch(addCount(cartItem.id))
        }}>+</Btn></td>
      </tr>
    )
  })
  
  return (
    <div>
      <Child count={count}></Child>
      <button onClick={() => { setCount(count+1) }}>+++</button>

      { state.user.name }[{ state.user.age }] 의 장바구니 <br/>
      <button onClick={() => { dispatch(addAge(10)) }}>버튼</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          { cartItemsList }
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
