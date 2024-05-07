import React, { useMemo, useState } from "react";

import { initialItems } from "../utils/usememoUtils";

/* 
  ----- UseMemo -----
  UseMemo is a hook that it’s used to memoize values in react components.

  We can use Memo to improve performance in a situation where we dont 
  need to recompute a value across rendering, because the value is the same. 
  So memo is a hook tha will memorize a value and return the same value until 
  any of the dependecies change.
*/
export const UseMemoComponent = () => {
  const [count, setcount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    // Value that we want to memoize and return
    () => items.find((item) => item.isSelected),
    [items] // dependencies array that we want to watch
  );

  return (
    <div className="tutorial">
      <h1>{count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setcount((prev) => prev + 1)}>Click</button>
    </div>
  );
};
