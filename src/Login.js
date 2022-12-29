import { useState } from "react"
import { Link } from "react-router-dom";
import './index.css'
export default function Login(){
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('');
    const [allEntry,setAllEntry] = useState([]) 
    const submitForm = (e)=>{
        e.preventDefault();
        const newEntry = {email: email, password: password };

        setAllEntry([...allEntry,newEntry])
    }
    return <>
    <div className="heading8">
    <div className="heading3">
     <h3>Login</h3>
    </div>
    <form action="" onSubmit={submitForm}>

    <div className="form-control text-center">
       <label htmlFor="email"><b>Email :</b>&nbsp;</label>
       <input type="text" name="Email" id="email" autoComplete="off"
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
         />
    </div>
     <br/>
    <div className="form-control text-center">
       <label htmlFor="password"><b>Password :</b>&nbsp;</label>
       <input type="password" name="Password" id="password" autoComplete="off"
       value={password}
       onChange={(e)=> setpassword(e.target.value)}
       />
    </div>
    <br/>
    </form>

    <div className="text-center">
    <div className="col-lg-10 col-md-10">
    <Link to="/F">
    <button type="submit"><b>Login</b></button>
    </Link>
    </div>
    </div>

    <div>
        {
            allEntry.map((curElem)=>{
                return (
                    <div className="btn btn-">
                    <b>Email:</b>&nbsp;<h4 className="btn btn-primary">{curElem.email}</h4>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <b>Password:</b>&nbsp;<h4 className="btn btn-danger">{curElem.password}</h4>  
                    </div>
                )
            })
        }
       </div>
       </div>

    </>
}