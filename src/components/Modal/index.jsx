import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { TechContext } from "../../providers/TechContext";
import { api } from "../../services/api";
import { StylesButtons } from "../../styles/StylesButtons";
import { StylesInputs, StylesSelect } from "../../styles/StylesInputs";
import { Background, ModalStyle } from "./style";

export const Modal = ({ isOpen, setOpenModal }) => {
  const { createTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm({});

  const submit = async (formData) => {
    await createTech(formData);
    reset();
  };

  if (isOpen) {
    return (
      <Background>
        <ModalStyle>
          <div className="modalContaier">
            <div className="modalContaier__header">
              <p>Cadastrar Tecnologia</p>
              <button
                className="modalContaier__header--ButtonClose"
                onClick={() => setOpenModal(false)}
              >
                X
              </button>
            </div>

            <form onSubmit={handleSubmit(submit)}>
              <div className="modalContaier__main">
                <label htmlFor="">Nome</label>
                <StylesInputs
                  type="text"
                  placeholder="Typescript"
                  {...register("title")}
                />

                <label htmlFor="">Selecionar status</label>
                <StylesSelect {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </StylesSelect>

                <StylesButtons>Cadastrar Tecnologia</StylesButtons>
              </div>
            </form>
          </div>
        </ModalStyle>
      </Background>
    );
  }

  return null;
};
