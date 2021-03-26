import React, { useState, useEffect } from "react";
import Button from "../Button";
import { ReactComponent as SearchIcon } from "../searchSvg.svg";
import styles from "./Search.module.css";
import PropTypes from "prop-types";

const Searchbar = ({ search, page }) => {
  const [inputText, setInputText] = useState("");

  const handlClick = () => {
    page(1);
  };

  useEffect(() => {
    search(inputText);
  }, [inputText]);

  return (
    <header>
      <input
        type="text"
        placeholder="Шо шукаємо, друже?"
        onChange={(e) => {
          if (e.target.value !== inputText) return setInputText(e.target.value);
        }}
      ></input>
      <Button
        onClick={() => {
          handlClick();
        }}
      >
        <SearchIcon width="24" height="24" className={styles.colorPic} />
      </Button>
    </header>
  );
};
export default Searchbar;

Searchbar.propTypes = {
  search: PropTypes.func,
  page: PropTypes.number,
};
