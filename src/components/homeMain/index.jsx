import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import {
  TypographySmallTexts,
  TypographyTexts,
  TypographyTitles,
} from "../../styles/Typography";
import { StyleMainHome } from "./style";
import plusimage from "../../assets/plus.png";
import { Modal } from "../Modal";
import { useState } from "react";
import { SectionTech } from "../SectionTech";

export const HomeMain = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <StyleMainHome>
      <div className="container">
        <div className="container__texts">
          <TypographyTitles className="container__name">
            Olá, {user.name}
          </TypographyTitles>
          <TypographySmallTexts className="container__curseModule">
            {user.course_module}
          </TypographySmallTexts>
        </div>
      </div>
      <div className="containerMain">
        <TypographyTitles className="containerMain__title">
          Tecnologias
        </TypographyTitles>
        <button
          className="containerMain__button"
          onClick={() => setOpenModal(true)}
        >
          <img src={plusimage} alt="" />
        </button>
      </div>

      <section>
        <SectionTech />
      </section>
      <Modal isOpen={openModal} setOpenModal={setOpenModal} />
    </StyleMainHome>
  );
};
