import { useCallback, useState } from "react";
import { shuffle } from "../utils/shuffle";
import Search from "../components/Search";

const allUsers = ["Jhon", "Jenny", "Jane", "Jack", "Joe", "Jen", "Jim", "Jill"];

/* 
  ----- UseCallback -----
  UseCallback is a hook that it’s used to memoize functions in react components.
  
  In react, functions, even if they have the same code and even they are doing the same thing. 
  They will be considered different across renderings. What UseCallback does it is take
  a function and wrap it to return the “same function” that is identical across renders, 
  so this is gona happen util one of the dependencies change
*/
export const UseCallbackComponent = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text: string) => {
    const filteredUsers = allUsers.filter((user) => user.toLowerCase().includes(text.toLowerCase()));
    setUsers(filteredUsers);
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => setUsers(shuffle(allUsers))}> Shuffle</button>
        <Search onChange={handleSearch} />
      </div>

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
