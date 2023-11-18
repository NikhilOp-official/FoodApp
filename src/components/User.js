import { useState } from "react"

const User = (props)=>{
     const [count,setCount]=useState(0)
     const [count2,setCount2]=useState(1)
     return (
       
        <div className="user">
            <h1>Count:{count}</h1>
            <h1>Count:{count2}</h1>
            <h1>Name:{props.name} </h1>
            <h2>Location:{props.location}</h2>

            <h2>Contact:@nikhil</h2>
        </div>
    )
}
export default User