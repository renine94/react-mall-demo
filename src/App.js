import './App.css';
import MyNavbar from './layouts/MyNavbar';


function App() {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>

      <div className="main-bg"/>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/logo192.png'}  width="80%" alt='shose1' />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg'  width="80%" alt='shose2' />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg'  width="80%" alt='shose3' />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;