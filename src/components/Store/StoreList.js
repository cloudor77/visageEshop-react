import { useState } from "react";
import { DUMMY_STORAGE } from "../../store/store-data";

import StoreItem from "./StoreItem";
import Header from "./StoreSearch/Header";

import classes from "./StoreList.module.css";

const StoreList = (props) => {
  const [showError, setShowError] = useState(false);
  const [search, setSearch] = useState(DUMMY_STORAGE);

  const chooseCategory = (cat) => {
    const category = DUMMY_STORAGE.filter((item) => item.category === cat);
    setSearch(category);
  };

  const searchForItems = (val) => {
    const searchResults = DUMMY_STORAGE.filter((el) => {
      if (el.title.toLowerCase().includes(val.toLowerCase())) {
      }

      return el.title.toLowerCase().includes(val.toLowerCase());
    });

    if (searchResults.length === 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }

    return setSearch(searchResults);
  };

  const setToDefault = (allCat, showErr) => {
    setSearch(allCat);
    setShowError(showErr);
  };

  return (
    <div className={classes.storeSegment}>
      <Header
        searchForItems={searchForItems}
        setToDef={setToDefault}
        test={props.test}
      />
      <div className={classes.listUlSpace}>
        <ul className={classes.listUl}>
          <li
            onClick={() => {
              setSearch(DUMMY_STORAGE);
              setShowError(false);
            }}
          >
            <a href="!#" className="">
              All
            </a>
          </li>
          <li
            onClick={() => {
              chooseCategory("NY");
              setShowError(false);
            }}
          >
            <a href="!#"> New York Yankees</a>
          </li>
          <li
            onClick={() => {
              chooseCategory("LC");
            }}
          >
            <a href="!#">Lulu Castagnette</a>
          </li>
          <li
            onClick={() => {
              chooseCategory("LCfK");
            }}
          >
            <a href="!#">Lulu Castagnette For Kids</a>
          </li>
          <li
            onClick={() => {
              chooseCategory("LP");
            }}
          >
            <a href="!#">Lapo</a>
          </li>
        </ul>
      </div>
      {showError && <p>Nothing</p>}
      {search
        ?.sort((a, b) => a.title.localeCompare(b.title))
        .map((item) => (
          <StoreItem
            id={item.id}
            key={item.id}
            title={item.title}
            category={item.category}
            description={item.description}
            price={item.price}
            img={item.img}
          />
        ))}
    </div>
  );
};

export default StoreList;
