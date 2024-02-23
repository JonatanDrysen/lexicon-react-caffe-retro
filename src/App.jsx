import { Content } from "./Components/Content";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";

export function App() {

  return (
    <>
      <Nav />
      <main>
        <section className="hot">
          <Header text={"Hot"} />
          <Content />
        </section>

      </main>
    </>
  );
}
