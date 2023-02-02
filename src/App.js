import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Delivery from "./Delivery";
import Contact from "./Contact";
import "./App.css";
import Message from "./Message";
import Footer from "./Footer";

function App() {
  return ( <div>  
    <Message />
    <Router>
    <nav className="navBar">
      <Link to='/' className="link">E-shop</Link>
      <Link to='/about' className="link">Káva na míru</Link>
      <Link to='/delivery' className="link">Doprava a platba</Link>
      <Link to='/contact' className="link">Kontakty</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/delivery' element={<Delivery/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  </Router>
  <Footer />
  </div>
    
  );
}

export default App;
