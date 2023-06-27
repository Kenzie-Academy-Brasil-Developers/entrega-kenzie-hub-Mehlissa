import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { BackgroundTech } from "./style";
import { StylesDiv, StylesSelect } from "../../styles/StylesInputs";
import { useForm } from "react-hook-form";
import { StylesButtons } from "../../styles/StylesButtons";
import { TypographySubtitles } from "../../styles/Typography";

export const ModalTech = () => {
  const {
    opneModalTech,
    setOpenModalTech,
    tech,
    updateTech,
    deleteTech,
    techId,
  } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const submit = async (formData) => {
    await updateTech(formData);
    reset();
  };

  if (opneModalTech) {
    return (
      <BackgroundTech>
        <div className="modalControll">
          <div className="modalControll__hadear">
            <p>Cadastrar Tecnologia</p>
            <button
              className="modalContaier__header--ButtonClose"
              onClick={() => setOpenModalTech(false)}
            >
              X
            </button>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <div className="modalContaier__main">
              <TypographySubtitles className="label">Nome</TypographySubtitles>
              <StylesDiv>
                <p>{tech.title}</p>
              </StylesDiv>
              <TypographySubtitles className="label">
                Status
              </TypographySubtitles>
              <StylesSelect {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </StylesSelect>
            </div>
            <div className="modalContaier__divButtons">
              <StylesButtons
                type="submit"
                className="modalContaier__divButtons--buttonSave"
              >
                Salvar alteração
              </StylesButtons>
              <button
                type="button"
                className="modalContaier__divButtons--buttonDelete"
                onClick={() => {
                  deleteTech();
                }}
              >
                Excluir
              </button>
            </div>
          </form>
        </div>
      </BackgroundTech>
    );
  }
};
