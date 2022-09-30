import React,{useState} from 'react'

export default function useState_Function() {

    const[value,setValue]=useState(0);

    const increase=()=>
    {
        setValue(value+1);
    }
    const decrease=()=>
    {
        setValue(value-1);
    }

  return (
    <div>
        <h2>value:{value}</h2>

        <button className="myBtn" onClick={increase} disabled={value===100? true: false}>Increase</button>
        <button className="myBtn" onClick={decrease} disabled={value===0? true: false}>Decrease</button>
      
    </div>
  )
}

