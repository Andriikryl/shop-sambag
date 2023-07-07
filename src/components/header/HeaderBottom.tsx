import Curt from "../../icons/Curt";
import Fhone from "../../icons/Fhone";
import Insta from "../../icons/Insta";
import Love from "../../icons/Love";
import Search from "../../icons/Search";
import Tg from "../../icons/Tg";
import Viber from "../../icons/Viber";
import styles from "./style.module.css";
import Logo from "/public/header/logo.svg";

export default function HeaderBottom() {
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
          <a href="#">
            <Curt />
          </a>
        </li>
      </ul>
    </div>
  );
}
