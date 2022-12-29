import { useState } from "react"
import { Link } from "react-router-dom";
import './index.css'
export default function Signup(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')
   
    const [allEntry,setAllEntry] = useState([]) 
    const submitForm = (e)=>{
        e.preventDefault();
        const newEntry = {name: name, email: email, password: password};
        setAllEntry([...allEntry,newEntry])
    }
    return <>
     <div className="heading9">
     <div className="heading2">
     <h3>Signup</h3>
    </div>
    <form action="" onSubmit={submitForm}>

    <div className="text-center form-control">
       <label htmlFor="name"><b>Name :</b>&nbsp;</label>
       <input type="text" name="name" id="name" autoComplete="off"
         value={name}
         onChange={(e)=> setName(e.target.value)}
         />
    </div>  
      <br/>
    <div className="text-center form-control">
       <label htmlFor="email"><b>Email :</b>&nbsp;</label>
       <input type="text" name="Email" id="email" autoComplete="off"
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
         />
    </div>
    <br/>
    <div className="text-center form-control">
       <label htmlFor="password"><b>Password :</b>&nbsp;</label>
       <input type="password" name="Password" id="password" autoComplete="off"
       value={password}
       onChange={(e)=> setpassword(e.target.value)}
       />
    </div>
    <br/>

    <div className="text-center">
    <div className="col-lg-10 col-md-10">
    <Link to="/L">
    <button type="submit"><b>Submit</b></button>
    </Link>
    </div>
    </div>
  
    
    </form>

    </div>

    </>
}