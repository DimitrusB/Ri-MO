import { Link } from "react-router-dom";
import { ListHeroes } from "../../components/list";
import home from "../../img/home.svg";

export const Home = () => {
  return (
    <div>
      <div  style={{width:"100%", height:"376px", backgroundColor:"white"}}>
        <Link to="/">
          <img src={home} style={{ margin:"50px" }} alt="Home" />
        </Link>
        <h1 style={{ textAlign:"center", color:"black"}}>Персонажи Рика и Морти</h1>
      </div>
      <div>
      <ListHeroes />
      </div>
    </div>
  );
};
