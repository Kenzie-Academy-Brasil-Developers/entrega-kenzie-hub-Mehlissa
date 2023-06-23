import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");

  const createTech = async (formData) => {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      toast.success("Tecnologia criada com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider value={{ createTech }}>
      {children}
    </TechContext.Provider>
  );
};
