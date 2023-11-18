import User from "./User"
import UserClass from "./UserClass"
import React from "react"

// const About = () => {
//   return (
//     <div>
//       <User name={"Nikhil"} location={"Mumbai"}/>
//       <UserClass  name={"Nikhil"} location={"Mumbai"} />


//     </div>
//   )
// }


class About extends React.Component{
  constructor(props){
    super(props)
    // console.log("parent constructor")
    
  }

  componentDidMount(){

    //api  is called here
      // console.log("parent componentdidmount")
  }


  render(){
    return(
      <div>
        {/* {console.log("parent render")} */}
       <UserClass  name={"first"} location={"Mumbai"} />
       {/* <UserClass  name={"second"} location={"Mumbai"} />
       <UserClass  name={"third"} location={"Mumbai"} /> */}
       

     </div>
    )
  }
}
export default About  