import { LoginForm } from "../../components/LoginForm";

import logo from "../../assets/logo.svg";
import { StyleLoginPage } from "./style";

export const Login = () => {
  return (
    <StyleLoginPage>
      <header className="header">
        <img src={logo} alt="" />
      </header>
      <LoginForm />
    </StyleLoginPage>
  );
};
