import { useContext } from "react";

import classes from "./HeaderButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import StoreContext from "../../../store/store-context";

const HeaderButton = (props) => {
  const storeCtx = useContext(StoreContext);

  const storeItemLength = storeCtx.storeItems.length > 0;

  return (
    <div className={classes.button}>
      <FontAwesomeIcon
        icon={faCartShopping}
        size="lg"
        cursor="pointer"
        onClick={props.test}
        style={{
          color: storeItemLength ? "green" : "",
        }}
      />
    </div>
  );
};

export default HeaderButton;
