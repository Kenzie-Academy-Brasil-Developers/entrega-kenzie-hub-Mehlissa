import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import {
  TypographySmallTexts,
  TypographyTitles,
} from "../../styles/Typography";
import { EmptyList, StyleTechList } from "./style";
import { TechContext } from "../../providers/TechContext";

export const SectionTech = () => {
  const { user } = useContext(UserContext);
  const { setOpenModalTech, setTech, settechId } = useContext(TechContext);

  if (user.techs.length === 0) {
    return (
      <EmptyList>
        <TypographyTitles>
          Você não possui nenhuma tecnologia registrada.
        </TypographyTitles>
      </EmptyList>
    );
  }

  return (
    <StyleTechList>
      {user.techs.map((user) => (
        <li
          onClick={() => {
            setOpenModalTech(true);
            setTech(user);
            settechId(user.id);
          }}
          className="listContainer"
          key={user.id}
        >
          <div className="listContainer__div">
            <TypographyTitles>{user.title}</TypographyTitles>
            <TypographySmallTexts>{user.status}</TypographySmallTexts>
          </div>
        </li>
      ))}
    </StyleTechList>
  );
};
