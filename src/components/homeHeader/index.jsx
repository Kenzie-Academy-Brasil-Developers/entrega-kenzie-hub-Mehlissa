import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { toast } from "react-toastify";
import { StyleHeaderHome } from "./style";
import { StyleButtonsLinkBack } from "../../styles/StylesButtons";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const HeaderHome = () => {
  const { setUser } = useContext(UserContext);

  return (
    <StyleHeaderHome>
      <div className="container">
        <img src={logo} alt="" />
        <StyleButtonsLinkBack
          onClick={() => {
            localStorage.clear();
            setUser(null);
            toast.success("logout realizado com sucesso");
          }}
        >
          <Link className="link" to="/">
            Sair
          </Link>
        </StyleButtonsLinkBack>
      </div>
    </StyleHeaderHome>
  );
};
