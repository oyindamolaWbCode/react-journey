import React from "react";
import { useState } from "react";
import Greet from "./Components/Greet";
import Mini from "./Components/Mini";
import Welcome from "./Components/Welcome";
import State from "./Components/State";
import Effect from "./Components/Effect";
import Context from "./Components/context";
import Pagination from "./Components/pagination";
import Test from "./Components/Test";
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
        <Route path="/Test" element={<Test />} />
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
