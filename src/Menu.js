import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addProduct} from "./ReduxData/StudentSlice"
import { Link } from "react-router-dom"
import DummyData from "./DummyData"
import ItemQty from "./ItemQty"
import './index.css'
export default function Menu(){
    const cartSize = useSelector(state=>state.carts.value.length)
    const carts = useSelector(state=>state.carts.value)
    const dispatch = useDispatch()
    const add = (ob)=>{
        dispatch(addProduct(ob))
   
    }
    return <>
    <div className="row heading5">
    <div className="col-lg-10 col-md-10">
     <h3><i className="fas fa-fw fa-utensils"></i>&nbsp;Food's Resturant</h3></div>
    <div className="col-lg-2 col-md-2">
    <Link to="/C"><i className="fas fa-fw fa-shopping-cart text-danger"></i></Link>
    &nbsp;<b>{cartSize>0?cartSize:''}</b>
    </div>
    </div>
    <br/>
    <div className="row">
        {DummyData.map(ob=><div className="col-lg-4 col-md-4 text-center">
            <img src={ob.image} height={200} width={240}/>
            <br/>
            <h4 className="text-danger">{ob.Name}</h4>
            <h6>Rs.{ob.Price}</h6>
            {carts.some(item=>item.product.pid==ob.pid)?<>
            <ItemQty item={carts.find(ct=>ct.product.pid==ob.pid)}/>
            </>:
             <button className="btn btn-primary" onClick={()=>add(ob)}>
             <i className="fas fa-fw fa-shopping-cart"></i>
             &nbsp;Add To Cart</button>}
             <hr/>
            </div>)}
    </div>
    </>
}