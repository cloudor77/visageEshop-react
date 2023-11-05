import StoreList from "../Store/StoreList";
import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={classes.main}>
      <StoreList test={props.showBasketToStoreList} />
    </div>
  );
};

export default Main;
