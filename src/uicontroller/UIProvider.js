// import { useReducer } from "react";
// import UIContext from "./uicontroller-context";

// const defaultUIState = {
//   toggle: true,
// };

// const uiReducer = (store, action) => {
//   if (action.type === "TOGGLE") {
//     return !store.toggle;
//   }
// };

// const UIProvider = (props) => {
//   const [uiState, dispatchUIAction] = useReducer(uiReducer, defaultUIState);

//   const toggleUI = (toggle) => {
//     dispatchUIAction({ type: "TOGGLE", toggle: toggle });
//   };

//   const uiContext = {
//     toggle: toggleUI,
//   };

//   return (
//     <UIContext.Provider value={uiContext}>{props.children}</UIContext.Provider>
//   );
// };

// export default UIProvider;
