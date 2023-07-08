import { useShoppingCart } from "../../context/ShopingCarContext";
import storeItems from "../../data/items.json";
import { formatCurrency } from "../../utilites/formatCurency";
import styles from "./styles.module.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <li className={styles.list__itemCart}>
      <div className={styles.item__img}>
        <img src={item.imgUrl} alt="image" width="260" height="350" />
      </div>
      <div>
        <span>{item.name}</span>
      </div>
      <div>
        <span>{formatCurrency(item.price)}</span>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <button
        className={styles.cart__btn}
        onClick={() => removeFromCart(item.id)}
      >
        remove item
      </button>
    </li>
  );
}
