import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { HomeMain } from "../components/homeMain";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");
  const [tech, setTech] = useState({});
  const [techId, settechId] = useState(null);

  const {
    user,
    setUser,
    opneModalTech,
    setOpenModalTech,
    openModal,
    setOpenModal,
  } = useContext(UserContext);

  const createTech = async (formData) => {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpenModal(false);
      toast.success("Tecnologia criada com sucesso");
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
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const deleteTech = async () => {
    try {
      const { data } = await api.delete(`/users/techs/${idTech}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOpenModalTech(false);
      toast.success("Tecnologia deletada com sucesso");
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
