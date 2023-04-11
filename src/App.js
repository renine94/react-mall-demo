import { Routes, Route, Link } from 'react-router-dom';

import MyNavbar from './layouts/MyNavbar';
import Home from './pages/Home';

import './App.css';



function App() {

  let css1 = {color: 'red'};
  let css2 = {margin: '10px', color: 'black'};

  return (
    <div className="App">
      {/* Navbar */}
      <MyNavbar></MyNavbar>

      <Link to='/' style={ css1 } >renine94's Shop</Link>
      <Link to='/detail' style={ css2 } >detail</Link>
      <Link to='/about'>about</Link>

      {/* Router */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<div>detail</div>} />
        <Route path='/about' element={<div>about</div>} />
      </Routes>

    </div>
  );
}

export default App;