import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useContext } from "react";
import { TechContext } from "./TechContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [opneModalTech, setOpenModalTech] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");

    const loadUsers = async () => {
      try {
        const { data } = await api.get(`/users/${userId}`);
        setUser(data);
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    };
    loadUsers();
  }, [opneModalTech, openModal]);

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      toast.success("Login realizado com sucesso");
      navigate("/home");
      setUser(data.user);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      console.log(data);
      toast.success("Conta criada com sucesso");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        setUser,
        user,
        loading,
        openModal,
        setOpenModal,
        opneModalTech,
        setOpenModalTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
