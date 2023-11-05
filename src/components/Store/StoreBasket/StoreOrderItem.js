import classes from "./StoreOrderItem.module.css";
import { trimBlankSpaces as formText } from "../../../helpers/helpers";

const StoreOrderItem = (props) => {
  return (
    <li className={classes.list}>
      <div className={classes.orderDetails}>
        <span className={classes.orderTitle}>{formText(props.title)}</span>
        <span className={classes.orderPrice}>{`${props.price}€`}</span>
        <span className={classes.orderAmount}>{`x${props.amount}`}</span>
      </div>
      <div className={classes.orderBtnBox}>
        <button className={classes.orderBtn} onClick={props.removeOrderItem}>
          -
        </button>
        <button className={classes.orderBtn} onClick={props.addOrderItem}>
          +
        </button>
      </div>
    </li>
  );
};

export default StoreOrderItem;
