import { Link } from "react-router-dom";
import lauraImage from "../assets/laura.svg";
import ImageWindowAnimated from "../components/ImageWindowAnimated";

const Home = () => {
  return (
    <main className="px-5 py-10">
      <section>
        <h1>Welcome</h1>
        <ImageWindowAnimated />
        <p className="my-5">
          Welcome to my online store, I have a passion for knitting and I’m
          ready to share my creations with the world.
        </p>
        <Link to="/shop">
          <button>Shop</button>
        </Link>
        <img
          className="m-auto my-5"
          src={lauraImage}
          width={200}
          alt="Image of a cartoon lady that is knitting"
        />
      </section>
    </main>
  );
};

export default Home;
