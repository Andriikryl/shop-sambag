import "./App.css";
import Header from "./components/header/Header";
import { ShoppingCartProvider } from "./context/ShopingCarContext";
import Hero from "./sections/hero/Hero";
import Store from "./sections/store/Store";

function App() {
  return (
    <ShoppingCartProvider>
      <main>
        <Header />
        <Hero />
        <Store />
      </main>
    </ShoppingCartProvider>
  );
}

export default App;
