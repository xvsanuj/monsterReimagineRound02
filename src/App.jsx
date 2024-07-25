import React from 'react'
import Navbar from './Components/Navbar'
import Loader from './Components/Loader'
import Home from './Components/Home'
import Lenis from "lenis";
import Canvas from './Components/Canvas';
import Explore from './Components/Explore';
import Visiting from './Components/Visiting';
import Footer from './Components/Footer';
import Products from './Components/Products';
const App = () => {
  function lenisFn() {
    const lenis = new Lenis({
      wheelMultiplier: 2,
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 5),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  lenisFn();
  return (
    <div className=' overflow-x-hidden'>
        {/* <Loader /> */}
        <Navbar/>
        <Home/>
        <Canvas/>
        <Explore/>
        <Products/>
        <Visiting/>
        <Footer/>
    </div>
  )
}

export default App