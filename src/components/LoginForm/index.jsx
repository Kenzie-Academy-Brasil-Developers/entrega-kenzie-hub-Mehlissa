import { StyleLogin } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  StylesInputs,
  StylesInputsDiv,
  StylesInputsPassword,
} from "../../styles/StylesInputs";

import Eye from "../../assets/eye.svg";
import { StyleButtonsLink, StylesButtons } from "../../styles/StylesButtons";
import { ErrorsMensage } from "../../styles/ErrorsMensage";
import {
  TypographySmallTexts,
  TypographySubtitles,
  TypographyTitles,
} from "../../styles/Typography";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { userLogin } = useContext(UserContext);

  const submit = async (formData) => {
    await userLogin(formData);
    reset();
  };

  return (
    <StyleLogin onSubmit={handleSubmit(submit)}>
      <div className="loginContainer">
        <div className="loginContainer__title">
          <TypographyTitles>Login</TypographyTitles>
        </div>
        <TypographySubtitles>Email</TypographySubtitles>
        <ErrorsMensage>{errors.email?.message}</ErrorsMensage>
        <StylesInputs
          placeholder="Digite aqui seu email"
          type="email"
          {...register("email")}
        />
        <TypographySubtitles>Senha</TypographySubtitles>
        <ErrorsMensage>{errors.password?.message}</ErrorsMensage>
        <StylesInputsDiv>
          <StylesInputsPassword
            placeholder="Digite aqui sua senha"
            type="password"
            className="password"
            {...register("password")}
          />
          <img
            className="eyeHide"
            src={Eye}
            alt=""
            onClick={(event) => {
              event.preventDefault();

              const inputPassword = document.querySelector(".password");
              const eye = document.querySelector(".eyeHide");

              if (inputPassword.type == "password") {
                inputPassword.type = "text";
                eye.classList.add("hide");
              } else if (inputPassword.type == "text") {
                inputPassword.type = "password";
                eye.classList.remove("hide");
              }
            }}
          />
        </StylesInputsDiv>
        <StylesButtons className="buttonEnter">Entrar</StylesButtons>
        <div className="linkContainer">
          <TypographySmallTexts className="linkContainer__text">
            Ainda não possui uma conta?
          </TypographySmallTexts>
          <StyleButtonsLink className="buttonRegister">
            <Link className="link" to="/register">
              Cadastre-se
            </Link>
          </StyleButtonsLink>
        </div>
      </div>
    </StyleLogin>
  );
};
