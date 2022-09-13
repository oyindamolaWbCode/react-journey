import React from "react";
import { useState } from "react";
import Greet from "./Greet";
import Mini from "./Mini";
import Welcome from "./Welcome";

// loader component
// const Loader = () => {
//   return(

//     <div className="loader">
//       <p>Loading...</p>
//       </div>
//   );
// };

// content component
const App = () => {
  return ( 
    <div className="App">
      <Greet name="Bruce" nickname="tip"/>
      <Greet name="Bronze" nickname="tipsy"/>
      <Greet name="Beep" nickname="tommy"/>
      <Mini />
      <Welcome />
    </div>
   );

  
}

//create root for rndering

// const Loading = () =>{
//   const [isLoading, setIsLoading] = useState(true);

  //setTimeout 
  // setTimeout(() =>{
  //   setIsLoading(false);
  // }, 1000)

//render
// return(
//   <section className="container">
//     {isLoading ? <Loader /> : <App />}
//   </section>
// )
// }
 
export default App