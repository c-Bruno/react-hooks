import React, { useEffect, useState } from "react";

/* 
	----- UseEffect -----
	UseEffect is a hook that it’s used to run side-effects in react components.
	
	Similar with a Trigger in a database, as things happening as a consequence 
	of something else. We usually use this when some piece of data changes.
*/
export const UseEffectComponent = () => {
  const [count, setcount] = useState(0);

	useEffect(() => {
		// The code that we wants to run
		console.log(`The count is: ${count}`);
		
		// Optional: return a function that will be called on every unmount
		return () => {
			console.log(`The component is unmounted`);
		}
	}, [count]); // The dependencies array

  return (
    <div className="tutorial">
      <h1>{count}</h1>
      <button onClick={() => setcount((prev) => prev  + 1)}>Click</button>
    </div>
	);
};
