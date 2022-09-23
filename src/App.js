import React from "react";
import { useState } from "react";
import Greet from "./Greet";
import Mini from "./Mini";
import Welcome from "./Welcome";
import State from "./State";
import Effect from "./Effect";
import Context from "./context";
import Pagination from "./pagination";
import { Router, Route, Routes, Link } from "react-router-dom";

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
    <div className="content">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/mini" element={<Mini />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
    </div>

    // <Router>
    //   <div className="App">
    //     {/* <Greet name="Bruce" nickname="tip"/>
    //   <Greet name="Bronze" nickname="tipsy"/>
    //   <Greet name="Beep" nickname="tommy"/> */}
    //     <div className="content">
    //       <switch>
    //       <Route exact path="/">
    //         <Welcome />
    //       </Route>
    //       <Route path="/mini">
    //         <Mini />
    //       </Route>
    //       {/* <State />
    // <Effect /> */}
    //       {/* <Context /> */}
    //       {/* <Pagination /> */}
    //       </switch>
    //     </div>
    //   </div>
  );
};

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

export default App;
