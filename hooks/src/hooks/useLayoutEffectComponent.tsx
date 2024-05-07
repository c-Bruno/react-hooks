import { useLayoutEffect, useState } from "react";

const userIds = [1, 2];

/*
  ----- UseLayoutEffect -----
  UseLayoutEffect is a hook in React that works very similarly to useEffect.

  but it runs at a different time in the lifecycle of a component. It’s used for 
  performing actions that need to happen right after DOM changes are flushed 
  out and before the browser has a chance to paint those changes on the screen.
*/
export const UseLayoutEffectComponent = () => {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  const now = performance.now();
  while (performance.now() - now < 200) {
    // Do nothing for a bit
  }

  // This code are not a good practice. Set the value of a state based on the value of another state
  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId);
    setUserId(otherId);
  };

  return (
    <div>
      <p>userId: {userId}</p> 
      <p>isAdmin: {isAdmin ? "true" : "false"}</p>
      <button onClick={handleChange}>Change User</button>
    </div>
  );
};
