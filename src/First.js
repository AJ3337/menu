import { Link } from "react-router-dom"
import './index.css'
export default function First(){
    return <>
   <div className="heading1">
     <h3><i className="fas fa-fw fa-utensils"></i>&nbsp;Food's Resturant</h3>
    </div>
  <br/><br/>
  <h1 className="text-center">Welcome to Food's<br/>Kitchen<br/>
  <Link to="/M"><h4 className="heading7">Go To Menu</h4></Link></h1>

    </>
}