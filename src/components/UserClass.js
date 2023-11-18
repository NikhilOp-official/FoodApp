import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("child constructor");
    this.state = {
      userInfo:{}
    };
  }

  async componentDidMount() {
    //api  is called here
    const data=await fetch("https://api.github.com/users/NikhilOp-official")
    const json= await data.json()

    this.setState({
        userInfo:json
    })
    // console.log(json)
    // console.log("child componentdidmount");
  }

  componentDidUpdate(){
    // console.log("child componentdidupdate");
  }

  componentWillUnmount(){
    // console.log("child componentwillmount");

  }
  render() {
    const {name,location,html_url,avatar_url}=this.state.userInfo
    return (
        
      <div className="user">
     {/* { console.log("child render")} */}
        <img src={avatar_url}/>
        <h1>Nameclass:{name}</h1>
        <h3>Location:{location}</h3>
        <h3>Contact:nikhilchaurasia@gmail.com</h3>
        <h3>Github:{html_url}</h3>
      </div>
    );
  }
}
export default UserClass;
