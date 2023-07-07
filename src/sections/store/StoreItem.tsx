import { useShoppingCart } from "../../context/ShopingCarContext";
import { formatCurrency } from "../../utilites/formatCurency";
import styles from "./styles.module.css";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  size: string;
};

export default function StoreItem({
  id,
  name,
  price,
  imgUrl,
  size,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quntity = getItemQuantity(id);
  return (
    <>
      <div className={styles.item__img}>
        <img src={imgUrl} alt="image" width="260" height="350" />
      </div>
      <h3 className={styles.item__title}>{name}</h3>
      <span className={styles.item__description}>
        Розмір (см): <br />
        {size}
      </span>
      <div className={styles.flex__group}>
        <div>
          <span className={styles.item__price}>{formatCurrency(price)}</span>
        </div>
        <div>
          {quntity === 0 ? (
            <button
              className={styles.item__btn}
              onClick={() => increaseCartQuantity(id)}
            >
              В кошик
            </button>
          ) : (
            <div>
              <div className={styles.btn__group}>
                <button
                  className={styles.btn__range}
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
                <div>
                  <span className={styles.item__amount}>{quntity}</span>
                </div>
                <button
                  className={styles.btn__range}
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
              </div>
              <div className={styles.btn__box}>
                <button
                  className={styles.remove__btn}
                  onClick={() => removeFromCart(id)}
                >
                  remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
