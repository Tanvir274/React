import React from "react";
import Card from './Card';

import Da from '../data.json';

function Data() {

    let item=[];
    for(let i=0; i<Da.length;i++)
    {
        item.push(<Card name={Da[i].name} id={Da[i].id}/>)

    }
    
    return(
        <>
        {item}
        </>

    )
}

export default Data;