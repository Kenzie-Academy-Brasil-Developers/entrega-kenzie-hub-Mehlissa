import { RegisterForm } from "../../components/RegisterForm";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { StyleRegisterPage } from "./style";
import { StyleButtonsLinkBack } from "../../styles/StylesButtons";

export const Register = () => {
  return (
    <StyleRegisterPage>
      <div className="container">
        <header className="header">
          <img src={logo} alt="" />
          <StyleButtonsLinkBack>
            <Link className="link" to="/">
              Voltar
            </Link>
          </StyleButtonsLinkBack>
        </header>
        <RegisterForm />
      </div>
    </StyleRegisterPage>
  );
};
