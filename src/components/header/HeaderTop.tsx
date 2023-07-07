import styles from "./style.module.css";

export default function HeaderTop() {
  return (
    <div className={styles.header__top}>
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
    </div>
  );
}
