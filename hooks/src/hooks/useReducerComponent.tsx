import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

const reducer = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 10;

      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;

      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum reached" : null,
      };
    }
    default:
      return state;
  }
};
/*
  ----- UseReducer -----
  UseReducer is a hook that it’s used to manipulate state in react components.

   It is very similar with useState. Both allowed you to get in the same result, 
   but with diferente aproachs and different use cases.

   UseReducer follows the redux pattern to manage state in react components.
*/
export const UseReducedComponent = () => {
  const [state, dispatch] = useReducer(
    reducer, // the reducer function
    { count: 0, error: null } // initialvalue
  );

  return (
    <div>
      <div> Count is: {state.count}</div>
      {state.error && <div>{state.error}</div>}
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
