import { useReducer } from "react";

import StoreContext from "./store-context";

const defaultStoreState = {
  storeItems: [],
  totalAmount: 0,
};

const storeReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.storeItem.price * action.storeItem.amount;

    const existingStoreItemId = state.storeItems.findIndex(
      (storeItem) => storeItem.id === action.storeItem.id
    );

    const existingStoreItem = state.storeItems[existingStoreItemId];

    let updatedStoreItems;

    if (existingStoreItem) {
      const updatedItem = {
        ...existingStoreItem,
        amount: existingStoreItem.amount + action.storeItem.amount,
      };

      updatedStoreItems = [...state.storeItems];
      updatedStoreItems[existingStoreItemId] = updatedItem;
    } else {
      updatedStoreItems = state.storeItems.concat(action.storeItem);
    }

    return {
      storeItems: updatedStoreItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingStoreItemId = state.storeItems.findIndex(
      (storeItem) => storeItem.id === action.id
    );

    const existingStoreItem = state.storeItems[existingStoreItemId];

    const updatedTotalAmount = state.totalAmount - existingStoreItem.price;
    console.log(defaultStoreState.storeItems);

    let updatedStoreItems;
    if (existingStoreItem.amount === 1) {
      updatedStoreItems = state.storeItems.filter(
        (item) => item.id !== action.id
      );
    } else {
      const updatedItem = {
        ...existingStoreItem,
        amount: existingStoreItem.amount - 1,
      };
      console.log(updatedItem);
      updatedStoreItems = [...state.storeItems];
      console.log(updatedStoreItems);
      updatedStoreItems[existingStoreItemId] = updatedItem;
    }

    return {
      storeItems: updatedStoreItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultStoreState;
};

const StoreProvider = (props) => {
  const [storeState, dispatchStoreAction] = useReducer(
    storeReducer,
    defaultStoreState
  );

  const addItemToOrder = (storeItem) => {
    dispatchStoreAction({ type: "ADD", storeItem: storeItem });
  };

  const removeItemFromOrder = (id) => {
    dispatchStoreAction({ type: "REMOVE", id: id });
  };

  const storeContext = {
    storeItems: storeState.storeItems,
    totalAmount: storeState.totalAmount,
    addItem: addItemToOrder,
    removeItem: removeItemFromOrder,
  };

  return (
    <StoreContext.Provider value={storeContext}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
