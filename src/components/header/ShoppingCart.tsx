import { CartItem } from "../../sections/store/CartItem";
import storeItems from "../../data/items.json";
import { useShoppingCart } from "../../context/ShopingCarContext";
import { formatCurrency } from "../../utilites/formatCurency";
import styles from "./style.module.css";
type ShoppingCartProps = {
  isOpen?: boolean;
  activeState: boolean;
}

export function ShoppingCart({ activeState }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <>
      <div
        className={`${styles.cart} ${activeState ? styles.menu_active : ""}`}
      >
        <h2>Cart</h2>
        <button onClick={closeCart}>close</button>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div>
            <h3>Total</h3>
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
