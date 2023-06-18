import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { toast } from "react-toastify";
import { StyleLogin } from "./style";
import { Link } from "react-router-dom";
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

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const loginUser = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      toast.success("Login realizado com sucesso");
      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const submit = async (formData) => {
    await loginUser(formData);
    reset();
  };

  return (
    <StyleLogin onSubmit={handleSubmit(submit)}>
      <div className="loginContainer">
        <div className="loginContainer__title">
          <TypographyTitles>Login</TypographyTitles>
        </div>
        <TypographySubtitles>Email</TypographySubtitles>
        <p>
          <ErrorsMensage>{errors.email?.message}</ErrorsMensage>
        </p>
        <StylesInputs
          placeholder="Digite aqui seu email"
          type="email"
          {...register("email")}
        />
        <TypographySubtitles>Senha</TypographySubtitles>
        <p>
          <ErrorsMensage>{errors.password?.message}</ErrorsMensage>
        </p>
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
