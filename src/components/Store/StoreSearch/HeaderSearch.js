import classes from "./HeaderSearch.module.css";
import HeaderButton from "./HeaderButton";
import { useEffect, useState } from "react";

import { DUMMY_STORAGE } from "../../../store/store-data";
const HeaderSearch = (props) => {
  const [enteredValue, setEnteredValue] = useState();

  const enteredValueHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEnteredValue(value);
    props.searchForItems(value);
  };

  useEffect(() => {
    if (enteredValue === "") {
      props.setToDef(DUMMY_STORAGE, false);
    }
  }, [props, enteredValue]);

  // const searchForItemsHandler = (e) => {
  //   if (e.target.value === "") {
  //     props.setToDef(DUMMY_STORAGE, false);
  //   }
  // };

  return (
    <>
      <div className={classes.form}>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          onChange={enteredValueHandler}
        />
      </div>
      <HeaderButton test={props.test} />
    </>
  );
};

export default HeaderSearch;
