import classes from "./Header.module.css";

import HeaderSearch from "./HeaderSearch";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <HeaderSearch
        searchForItems={props.searchForItems}
        setToDef={props.setToDef}
        test={props.test}
      />
    </div>
  );
};

export default Header;
