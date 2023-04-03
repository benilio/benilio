import { Link } from "react-router-dom";
import Navigation from "./Navigation";

import Trex from "./../assets/trex.svg";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Trex} alt="Trex Emoji" /> benilio.
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
