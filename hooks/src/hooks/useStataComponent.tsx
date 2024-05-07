import { useState } from "react";

/* 
  ----- UseState -----
  UseState is a hook that it’s used to manipulate state in react components.
*/
const UseStataComponent = () => {
  const [count, setcount] = useState(0);

  return (
    <div className="tutorial">
      <h1>{count}</h1>
      <button onClick={() => setcount((prev) => prev  + 1)}>Click</button>
    </div>
  );
};

export default UseStataComponent;
