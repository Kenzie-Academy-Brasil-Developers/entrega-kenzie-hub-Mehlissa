import { HomeMain } from "../../components/homeMain";
import { HeaderHome } from "../../components/homeHeader";
import { StyleHomePage } from "./style";

export const Home = () => {
  return (
    <StyleHomePage>
      <div className="container">
        <HeaderHome />
      </div>
      <HomeMain />
    </StyleHomePage>
  );
};
