import React,{useState} from 'react';

export default function Form() {
// const[namef,setfName]=useState();
// const[namel,setlName]=useState();
// const[Email,setemail]=useState();

    const[user, setUser]=useState({FirstName:"",LastName:"",Email:""});
    const {FirstName,LastName,Email}=user;

    // const fname=(e)=>{
    //     //console.log(e.target.value);
    //     //setfName(e.target.value)

    //     setUser({FirstName:e.target.value,LastName,Email});

    // };
    // const lname=(e)=>{
    //     //console.log(e.target.value);
    //     //setlName(e.target.value);
    //     setUser({FirstName,LastName:e.target.value,Email})

    // };
    // const email=(e)=>{
    //     //console.log(e.target.value);
    //     //setemail(e.target.value)
    //     setUser({FirstName,LastName,Email:e.target.value})

    // };

    const HandleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{  
        //alert(namef+ namel+ Email);
        //alert(obj);
        alert(FirstName+" "+LastName+" "+Email)  
        e.preventDefault();
    };

  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="FirstName" value={FirstName} required onChange={HandleChange}/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="LastName" value={LastName} required onChange={HandleChange}/><br/>
            <label for="email">Email:</label><br/>
            <input type="email" id="email" name="Email" value={Email} required onChange={HandleChange}/><br/>
            <button type='Submit'>Submit</button>
        </form>
      
    </div>
  )
}
