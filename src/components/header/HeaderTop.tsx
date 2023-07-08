import { useState } from "react";
import styles from "./style.module.css";
import BurgerButton from "./BurgerButton";

export default function HeaderTop() {
  const [activeState, setActiveState] = useState(false);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };

  return (
    <div className={styles.header__top}>
      <nav className={`${styles.nav} ${activeState ? styles.menu_active : ""}`}>
        <ul className={styles.header__topNav}>
          <li className={styles.topNav__item}>
            <a href="#">Про нас</a>
          </li>
          <li className={styles.topNav__item}>
            <a href="#">Оплата та доставка</a>
          </li>
          <li className={styles.topNav__item}>
            <a href="#">Обмін та повернення</a>
          </li>
          <li className={styles.topNav__item}>
            <a href="#">ОПТ та ДРОП</a>
          </li>
          <li className={styles.topNav__item}>
            <a href="#">Блог</a>
          </li>
        </ul>
      </nav>

      <ul className={styles.top__controls}>
        <li className={styles.control__items}>
          <a href="#">UA</a>
        </li>
        <li className={styles.control__items}>
          <a href="#">Eng</a>
        </li>
        <li className={styles.control__items}>
          <a href="#">Вхід</a>
        </li>
        <li className={styles.control__items}>
          <a href="#">Реєстрація</a>
        </li>
      </ul>
      <BurgerButton onClick={handleClick} activeState={activeState} />
    </div>
  );
}
