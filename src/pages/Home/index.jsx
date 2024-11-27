import { ListHeroes } from "../../components/list";
import home from "../../img/home.png"

export const Home = () => {
  return (
    <div>
      <div>
      <img src={home} style={{ width: "50px" }} alt="Home" />
      </div>
      <ListHeroes />
    </div>
  );
};
