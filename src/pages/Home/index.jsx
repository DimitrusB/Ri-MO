import { Link } from "react-router-dom";
import { ListHeroes } from "../../components/list";
import home from "../../img/home.png";

export const Home = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <img src={home} style={{ width: "50px" }} alt="Home" />
        </Link>
      </div>
      <ListHeroes />
    </div>
  );
};
