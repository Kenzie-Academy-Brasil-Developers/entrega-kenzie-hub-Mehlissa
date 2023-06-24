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
import { SectionTech } from "../SectionTech";
import { ModalTech } from "../ModalTech";
import { TechContext } from "../../providers/TechContext";

export const HomeMain = () => {
  const { user } = useContext(UserContext);
  const { openModal, setOpenModal } = useContext(TechContext);

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
      <ModalTech />
    </StyleMainHome>
  );
};
