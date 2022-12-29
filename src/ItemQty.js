import { useDispatch } from "react-redux"
import { incrementQty,decrementQty,delProduct } from "./ReduxData/StudentSlice"
export default function ItemQty(props){
    const dispatch = useDispatch()
    const increment = ()=>{
       dispatch(incrementQty({pid:props.item.product.pid}))
    }
    const decrement = ()=>{
        dispatch(decrementQty({pid:props.item.product.pid}))
     }
     const deleteItem = ()=>{
        dispatch(delProduct({pid:props.item.product.pid}))
     }
    return <span>
       <button className="btn btn-primary" onClick={increment}> + </button> &nbsp;&nbsp;
        <b>{props.item.qty}</b> &nbsp;&nbsp;
       <button className="btn btn-danger" onClick={decrement}> - </button> &nbsp;&nbsp;
       <button className="btn btn-primary" onClick={deleteItem}><i className="fas fa-fw fa-trash"></i></button>
    </span>
}