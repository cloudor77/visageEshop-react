import { useState } from "react";

import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import StoreProvider from "./store/StoreProvider";
// import UIProvider from "./uicontroller/UIProvider";
import StoreOrderBasketOverlay from "./components/Store/StoreBasket/StoreOrderBasketOverlay";
// import StoreContext from "./store/store-context";

function App() {
  const [showBasket, setShowBasket] = useState(false);
  // const storeCtx = useContext(StoreContext);

  // const defaultVis = storeCtx.toggle;

  const showBasketHandler = () => {
    setShowBasket(true);
  };

  const hideBasketHandler = () => {
    setShowBasket(false);
  };
  return (
    <StoreProvider>
      {/* <UIProvider> */}
      {showBasket && (
        <StoreOrderBasketOverlay closeOverlay={hideBasketHandler} />
      )}
      <Navbar />
      <Main showBasketToStoreList={showBasketHandler} />
      {/* </UIProvider> */}
    </StoreProvider>
  );
}

export default App;
