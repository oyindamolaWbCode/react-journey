import React from "react";
import Greet from "./Greet";
import Mini from "./Mini";
import Welcome from "./Welcome";

const App = () => {
  return ( 
    <div className="App">
      <Greet name="Bruce" />
      <Greet name="Bronze"/>
      <Greet name="Beep"/>
      <Mini />
      <Welcome />
    </div>
   );
}
 
export default App;