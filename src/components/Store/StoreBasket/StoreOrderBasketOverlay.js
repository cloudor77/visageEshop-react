import { useContext, Fragment, useState } from "react";
import StoreContext from "../../../store/store-context";
import Modal from "../../UI/Modal";
import StoreOrderItem from "./StoreOrderItem";
import StoreOrderForm from "./StoreOrderForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./StoreOrderBasketOverlay.module.css";

const StoreOrderBasketOverlay = (props) => {
  const [showForm, setShowForm] = useState(true);
  const [animate, setAnimate] = useState(true);

  const storeCtx = useContext(StoreContext);
  const totalAmount = `${storeCtx.totalAmount.toFixed(2)}`;

  const storeOrderItemHandler = (item) => {
    const orderItem = { ...item, amount: 1 };
    storeCtx.addItem(orderItem);
  };

  const storeRemoveItemHandler = (id) => {
    storeCtx.removeItem(id);
  };
  const storeItems = (
    <ul className={classes.itemList}>
      {storeCtx.storeItems.map((item) => (
        <StoreOrderItem
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          addOrderItem={storeOrderItemHandler.bind(null, item)}
          removeOrderItem={storeRemoveItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  let totalAmountParagraph;

  if (totalAmount > 0) {
    totalAmountParagraph = (
      <h4 className={classes.totalAmount}>{`Total: ${totalAmount}€`}</h4>
    );
  } else {
    totalAmountParagraph = (
      <h4 className={classes.noTotalAmount}>No items in the cart...</h4>
    );
  }

  const orderButton = (
    <div className={classes.orderBtn}>
      <button
        onClick={() => {
          setShowForm(!showForm);
          setAnimate(!animate);
        }}
      >
        Order Items{" "}
        {!animate ? (
          <FontAwesomeIcon icon={faArrowDown} size="sm" />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} size="sm" beat />
        )}
      </button>
    </div>
  );

  const storeModalContent = (
    <Fragment>
      {totalAmountParagraph}
      <div>
        {storeItems}
        {storeCtx.storeItems.length > 0 && orderButton}
        {storeCtx.storeItems.length > 0 && !showForm && <StoreOrderForm />}
      </div>
    </Fragment>
  );

  return <Modal closeOverlay={props.closeOverlay}>{storeModalContent}</Modal>;
};

export default StoreOrderBasketOverlay;
