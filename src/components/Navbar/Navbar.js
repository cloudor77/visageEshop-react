import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [translate, setTranslate] = useState(false);
  const [sticky, setSticky] = useState("");

  const stickyNav = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setSticky("stickyNav") : setSticky("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    return () => window.removeEventListener("scroll", stickyNav);
  }, []);

  return (
    <nav
      className={`${classes.navbar} ${translate && classes.transforming} ${
        classes[sticky]
      }`}
    >
      <h4>VisageOptik</h4>
      <ul className={classes.navbarUl}>
        <li>About Us</li>
        <li>Eshop</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
