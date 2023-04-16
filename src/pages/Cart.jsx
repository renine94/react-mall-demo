import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { addAge } from "../store/userSlice";
import { addCount } from "../store";


let Btn = styled.button`
  background: ${ props => props.bg };
  color: ${ props => ["blue", "purple"].includes(props.bg) ? 'white' : 'black' };
  padding: 10px;
`


const Cart = () => {
  let state = useSelector(state => state)
  let dispatch = useDispatch()
  let cartItems = state.cartItems;

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
