import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");
  const [openModal, setOpenModal] = useState(false);
  const [opneModalTech, setOpenModalTech] = useState(false);
  const [tech, setTech] = useState({});
  const [techId, settechId] = useState(null);

  const createTech = async (formData) => {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpenModal(false);
      toast.success("Tecnologia criada com sucesso");
      setTimeout(() => {
        location.reload();
      }, 1300);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const idTech = techId;

  const updateTech = async (formData) => {
    try {
      const { data } = await api.put(`/users/techs/${idTech}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpenModalTech(false);
      toast.success("Tecnologia alterada com sucesso");
      setTimeout(() => {
        location.reload();
      }, 1300);
    } catch (error) {
      error;
    }
  };

  const deleteTech = async (techId) => {
    try {
      const { data } = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpenModalTech(false);
      toast.success("Tecnologia deletada com sucesso");
      setTimeout(() => {
        location.reload();
      }, 1300);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        setOpenModalTech,
        opneModalTech,
        openModal,
        setOpenModal,
        tech,
        setTech,
        techId,
        settechId,
        updateTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
