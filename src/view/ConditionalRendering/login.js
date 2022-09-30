import React,{useState} from 'react'

export default function Login() {
    const[User,setUser]=useState({user:"",password:""});
    const{user,password}=User;

    const handleChange=(e)=>{
        setUser({...User,[e.target.name]: e.target.value});
    };

    const handleSubmit=(e)=>{

        alert(user+" "+password);

        e.preventDefault();

    }
  return (

    <div>
        <form action='' onSubmit={handleSubmit}>
            <br/><br/><br/><br/><br/><br/>
            <label>Username</label><br/>
            <input type="text" name='user' required onChange={handleChange}  /><br/>
            <label>Password</label><br/>
            <input type="text" name='password' required onChange={handleChange} /><br/>
            <button type='Submit'>Submit</button>

        </form>
      
    </div>
  )
}
