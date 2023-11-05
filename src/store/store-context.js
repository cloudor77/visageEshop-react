import React from "react";

const StoreContext = React.createContext({
  storeItems: [],
  totalAmount: 0,
  addItem: (storeItem) => {},
  removeItem: (id) => {},
});

export default StoreContext;
