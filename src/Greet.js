import React from "react";

const Greet = (props) => {
    console.log(props)
    return ( 
        <h1>Hello {props.name} alias: {props.nickname}</h1>
     );
}
 
export default Greet;