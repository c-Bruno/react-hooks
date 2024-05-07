import { useRef } from "react";
import Counter, { CounterRef } from "../components/Counter";

/* 
  ----- UseImperativeHandle -----
  With this hook, we can expose any function or functionality for the parents of one component.
*/
export const UseImperativeHandleComponent = () => {
  const counterRef = useRef<CounterRef>(null);

  return (
    <div>
      <div>
        <Counter ref={counterRef} />
      </div>
      <button onClick={() => counterRef.current?.reset()}>Reset from parent</button>
    </div>
  );
};
