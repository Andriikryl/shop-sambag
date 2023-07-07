import { useEffect, useState } from "react";
import Curt from "../../icons/Curt";
import Fhone from "../../icons/Fhone";
import Insta from "../../icons/Insta";
import Love from "../../icons/Love";
import Search from "../../icons/Search";
import Tg from "../../icons/Tg";
import Viber from "../../icons/Viber";
import { ShoppingCart } from "./ShoppingCart";
import styles from "./style.module.css";
import Logo from "/public/header/logo.svg";

export default function HeaderBottom() {
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dis-scroll", activeState);
  }, [activeState]);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <div className={styles.header__bottom}>
      <ul className={styles.social__controls}>
        <li className={styles.controls__item}>
          <a href="#">
            <Viber />
          </a>
        </li>
        <li className={styles.controls__item}>
          <a href="#">
            <Insta />
          </a>
        </li>
        <li className={styles.controls__item}>
          <a href="#">
            <Fhone />
          </a>
        </li>
        <li className={styles.controls__item}>
          <a href="#">
            <Tg />
          </a>
        </li>
      </ul>
      <a href="#">
        <img src={Logo} alt="logo" />
      </a>
      <ul className={styles.group__contols}>
        <li className={styles.group__item}>
          <a href="#">
            <Search />
          </a>
        </li>
        <li className={styles.group__item}>
          <a href="#">
            <Love />
          </a>
        </li>
        <li className={styles.group__item}>
          <button className={styles.item__curt} onClick={handleClick}>
            <Curt />
          </button>
        </li>
      </ul>
      <ShoppingCart activeState={activeState} />
    </div>
  );
}
