import { useRef, useState } from "react";

/* 
  ----- UseRef -----
  UseRef is a hook that it’s used to access DOM elements in react components.

  Different from other hooks, useRef is not a stateful value. A stateful value 
  is a value that can change over renderings and time, such as a variable.

  We can think about useRef in a similar way that we think about the useState, 
  but the biggest different is that unlike state, useRef does not trigger and rendering 
  the component and refValues are not used in the return body of the actual 
  component. So if I’m using useRef, I can see the updates without waithing for a rendering
  We can also use useRef for access directly HTML components
*/
export const UseRefComponent = () => {
  const [count, setcount] = useState(0);
  const ref = useRef(0);

  const handleIncrement = () => {
    setcount((prev) => prev + 1);
    ref.current ++;

    console.log(`State: ${count}, Ref: ${ref.current}`);
  };

  return (
    <div className="tutorial">
      <h1>{count}</h1>
      <h1>{ref.current}</h1>
      <button onClick={() => handleIncrement()}>Click</button>
    </div>
  );
};
