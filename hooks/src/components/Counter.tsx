import { Ref, forwardRef, useImperativeHandle, useState } from "react";

interface CounterProps {}

export type CounterRef = {
  reset: () => void;
};

const Counter = (props: CounterProps, ref: Ref<CounterRef>) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev: number) => prev + 1);
  };

  const decrement = () => {
    setCount((prev: number) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(
    ref, // The first argument is the reference
    () => ({
      // The second is the function that we want to expose
      reset,
    })
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default forwardRef(Counter);
