import { Routes,Route } from "react-router-dom";

import Menu from "./Menu";
import First from "./First";
import Cart from "./Carts";
import Thank from "./Thank";
import Login from "./Login";
import Signup from "./Signup";
export default function App(){
  return<>
   
  <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/M" element={<Menu/>}/>
    <Route path="/C" element={<Cart/>}/>
    <Route path="/T" element={<Thank/>}/>
    <Route path="/F" element={<First/>}/>
    <Route path="/L" element={<Login/>}/>
  </Routes>


  </>
}