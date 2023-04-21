import { createContext, lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import MyNavbar from "./layouts/MyNavbar";

import Home from "./pages/Home";
// import Detail from "./pages/Detail";
import About from "./pages/About";

import AboutMember from "./pages/AboutMember";
import AboutLocation from "./pages/AboutLocation";
import Cart from "./pages/Cart";

import "./App.css";
import data from './data';


// state 보관함
export let Context1 = createContext()

const Detail = lazy(() => import("./pages/Detail"));

function App() {

  useEffect(() => {
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify( [] ))
    }
  })

  let [shoes] = useState(data);

  return (
    <div className="App">
      {/* Navbar */}
      <MyNavbar></MyNavbar>

      {/* Router */}
      <Suspense fallback={<div>로딩중..</div>}>
        <Routes>
          <Route path="/" element={<Home shoes={shoes} />} />
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/about" element={<About />}>
            {/* Outlet 으로 보여줄 위치 뚫어줘야함 */}
            <Route path="member" element={<AboutMember />} />
            <Route path="location" element={<AboutLocation />} />
          </Route>

          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
