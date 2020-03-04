import React from "react";

export const innerCom = (props) => {
  console.log(props)
  return(
    <h3>I am inner</h3>
  )
}


const HomePage = () => (
  <div className="homepage">
    <div>
      <h1>I am the homepage</h1>
      <innerCom/>
    </div>
  </div>
);



export default HomePage;
