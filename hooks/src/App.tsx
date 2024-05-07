import "./App.css";
// import { UseRefComponent } from "./hooks/useRefComponent";
// import { UseMemoComponent } from "./hooks/useMemoComponent";
// import { UseStataComponent } from "./hooks/useStataComponent";
// import { UseEffectComponent } from "./hooks/useEffectComponent";
// import { UseContextComponent } from "./hooks/useContextCompoent";
// import { UseReducedComponent } from "./hooks/useReducerComponent";
// import { UseCallbackComponent } from "./hooks/useCallbackComponent";
// import { UseTransitionComponent } from "./hooks/useTransitionComponent";
import { UseDeferredValueComponent } from "./hooks/useDeferredValueComponent";
// import { UseImperativeHandleComponent } from "./hooks/UseImperativeHandleComponent";

function App() {
  // return <UseRefComponent />; //               ----- UseRef              -----
  // return <UseMemoComponent />;  //             ----- UseMemo             -----
  // return <UseStataComponent />; //             ----- UseState            -----
  // return <UseEffectComponent/>; //             ----- UseEffect           -----
  // return <UseContextComponent />; //           ----- UseContext          -----
  // return <UseReducedComponent />; //           ----- UseReducer          -----
  // return <UseCallbackComponent />; //          ----- UseCallback         -----
  // return <UseTransitionComponent />; //        ----- UseTransition       -----
  return <UseDeferredValueComponent />; //      ----- UseDeferredValue     -----
  // return <UseImperativeHandleComponent />; //  ----- UseImperativeHandle -----
  return <></>;
}

export default App;
