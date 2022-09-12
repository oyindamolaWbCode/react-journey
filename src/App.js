import React from "react";
import Greet from "./Greet";
import Mini from "./Mini";

const App = () => {
  return ( 
    <div className="App">
      <Greet name="Bruce" />
      <Greet name="Bronze"/>
      <Greet name="Beep"/>
      <Mini />
    </div>
   );
}
 
export default App;