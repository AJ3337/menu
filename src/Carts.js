import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ItemQty from "./ItemQty"
import './index.css'
export default function Cart(){
   const carts = useSelector(state=>state.carts.value)
    return <>
     <div className="heading6">
     <h3><i className="fas fa-fw fa-utensils"></i>&nbsp;Food's Resturant</h3>
     </div>
    <h1 className="text-center">Billing</h1>
    <hr/>
    <table className="table">
      <tr>
        <th>S NO.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Amount</th>
      </tr>
      {carts.map((item,index)=><tr>
        <td>{index+1}</td>
        <td><img src={item.product.image} height={150} width={190}/></td>
        <td>{item.product.Name}</td>
        <td>{item.product.Price}</td>
        <td><ItemQty item={item}/></td>
        <td>{item.product.Price*item.qty}</td>
      </tr>)}
    </table>
    <hr/>
    <h3 className="text-right alert alert-info">
        Total Amount :{carts.reduce((x,item)=>x+(item.product.Price * item.qty),0)}
    </h3>
    <div className="row alert alert-primary">
      <div className="col-lg-10 col-md-10">
      <Link to="/T"><h3>SAVE AND CHECKOUT</h3></Link>
      </div>
    </div>
    <div className="row alert alert-danger">
      <div className="col-lg-10 col-md-10">
      <Link to="/M"><h3>CANCEL</h3></Link>
      </div>
    </div>
    </>
}