import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";

import { HomeMain } from "../../components/homeMain";
import { HeaderHome } from "../../components/homeHeader";
import { StyleHomePage } from "./style";

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");

    const loadUsers = async () => {
      try {
        const { data } = await api.get(`/users/${userId}`);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadUsers();
  }, []);

  return (
    <StyleHomePage>
      <div className="container">
        <HeaderHome setUsers={setUsers} />
      </div>
      <HomeMain users={users} />
    </StyleHomePage>
  );
};
