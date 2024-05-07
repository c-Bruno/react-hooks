import { useDeferredValue, useState } from "react";
import SlowList from "../components/SlowList";

/*
  ----- UseDeferredValue -----
  UseDeferredValue is a hook in React that helps you manage updates more smoothly.

  It allows you to defer changes to a value until the main tasks, like user interactions, are completed. 
  This means that if you have a value that can wait to be updated without affecting the user experience, 
  useDeferredValue will delay updating it until there’s a good time to do so, like when 
  the browser is idle. This helps keep your app responsive by not overloading it with too many updates at once.
*/
export const UseDeferredValueComponent = () => {
  const [query, setQuery] = useState("");
  const defferredQuery = useDeferredValue(query);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <SlowList text={defferredQuery} />
    </div>
  );
};
