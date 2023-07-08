import { Container } from "../../components/container/Container";
import storeItems from "../../data/items.json";
import StoreItem from "./StoreItem";
import styles from "./styles.module.css";

export default function Store() {
  return (
    <Container>
      <ul className={styles.store__list}>
        {storeItems.map((item) => (
          <li className={styles.list__item} key={item.id}>
            <StoreItem {...item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
