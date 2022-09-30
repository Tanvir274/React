import React from "react";

const todos=[
    {
        
        "name":"Tanvir",
        "id": "100"
    },
    {
        "name":"Tanvir",
        "id": "100"
    },
    {
        "name":"Tanvir",
        "id": "100"
    }
];

function Mapxm() {

    return(
        <div>
            {todos.map(todo=>
                
                    <div> 
                        <h1>{todo.name}</h1>
                        <h1>{todo.id}</h1>

                    </div>
                )
            }

        </div>
    );
    
}

export default Mapxm;
