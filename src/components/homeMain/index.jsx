import {
  TypographySmallTexts,
  TypographyTexts,
  TypographyTitles,
} from "../../styles/Typography";
import { StyleMainHome } from "./style";

export const HomeMain = ({ users }) => {
  return (
    <StyleMainHome>
      <div className="container">
        <div className="container__texts">
          <TypographyTitles className="container__name">
            Olá, {users.name}
          </TypographyTitles>
          <TypographySmallTexts className="container__curseModule">
            {users.course_module}
          </TypographySmallTexts>
        </div>
      </div>
      <div className="containerMain">
        <TypographyTitles className="containerMain__title">
          Que pena! Estamos em desenvolvimento :(
        </TypographyTitles>
        <TypographyTexts className="containerMain__text">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </TypographyTexts>
      </div>
    </StyleMainHome>
  );
};
