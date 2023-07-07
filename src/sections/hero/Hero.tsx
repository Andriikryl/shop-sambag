import { Container } from "../../components/container/Container";
import style from "./style.module.css";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.hero__box}>
          <div className={style.hero__info}>
            <h1 className={style.hero__title}>
              головний <br /> банер
            </h1>
            <p className={style.hero__description}>
              Якщо якісні аксесуари – то «Sambag»!
            </p>
            <button className={style.hero__btn}>Перейти</button>
          </div>
        </div>
      </Container>
    </section>
  );
}
