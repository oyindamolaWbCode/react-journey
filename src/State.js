//useState
import {useState} from "react";

const State = () => {
     const [count, setCount] = useState(9);
    return ( 
       <div className="states">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}> Increment </button>
       </div>
     );
}
 
export default State;