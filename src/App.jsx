import { ContentCosy } from "./Components/ContentCosy";
import { ContentHot } from "./Components/ContentHot";
import { ContentJuicy } from "./Components/ContentJuicy"
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";

export function App() {
  return (
    <>
      <Nav />
      <main>
        <section id="hot" className="hot">
          <Header text={"Hot"} />
          <ContentHot />
        </section>

        <section id="juicy" className="juicy">
          <Header text={"Juicy"} />
          <ContentJuicy />
        </section>

        <section id="cosy" className="cosy">
          <Header text={"Cosy"} />
          <ContentCosy />
        </section>

      </main>
    </>
  );
}
