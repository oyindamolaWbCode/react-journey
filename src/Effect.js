import { useState } from "react";
import { useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count > 0){
       console.log("App component rendered");
    }
  }, [count]);

  const handleClick = (event) => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="somethingelse">
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Effect;
