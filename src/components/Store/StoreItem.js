import classes from "./StoreItem.module.css";
import StoreItemForm from "./StoreItemForm";

import { useContext } from "react";
import StoreContext from "../../store/store-context";

import { trimBlankSpaces as formText } from "../../helpers/helpers";

const StoreItem = (props) => {
  const storeCtx = useContext(StoreContext);

  const addToCartHandler = (a) => {
    storeCtx.addItem({
      id: props.id,
      key: props.id,
      title: props.title,
      price: props.price,
      amount: a,
    });
  };

  return (
    <div className={classes.storeItem}>
      <header>
        <p>{formText(props.title)}</p>
      </header>
      <section>
        <span>{props.description}</span>
        <img alt="Something here" src={props.img} />
      </section>
      <footer>
        <span>{props.price}€</span>
        <StoreItemForm addToOrder={addToCartHandler} />
      </footer>
    </div>
  );
};

export default StoreItem;
