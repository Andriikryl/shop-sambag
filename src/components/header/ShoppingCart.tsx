import { CartItem } from "../../sections/store/CartItem";
import storeItems from "../../data/items.json";
import { useShoppingCart } from "../../context/ShopingCarContext";
import { formatCurrency } from "../../utilites/formatCurency";
import styles from "./style.module.css";
import Logo from "/public/header/logo.svg";
type ShoppingCartProps = {
  isOpen?: boolean;
  activeState: boolean;
};

export function ShoppingCart({ activeState }: ShoppingCartProps) {
  const { cartItems } = useShoppingCart();
  return (
    <>
      <div
        className={`${styles.cart} ${activeState ? styles.menu_active : ""}`}
      >
        <div>
          <a href="#" className={styles.cart__logo}>
            <img src={Logo} alt="logo" />
          </a>
          <div className={styles.cart__group}>
            <span className={styles.cart__descirtipn}>Total:</span>
            <span className={styles.cart__descirtipn}>
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </span>
          </div>
        </div>
        <ul className={styles.cart__item}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </>
  );
}
