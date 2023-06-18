import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./RegisterSchema";
import { toast } from "react-toastify";
import { StyleRegister } from "./style";
import { StylesInputs } from "../../styles/StylesInputs";
import { ErrorsMensage } from "../../styles/ErrorsMensage";
import { StylesButtons } from "../../styles/StylesButtons";
import {
  TypographySmallTexts,
  TypographySubtitles,
  TypographyTitles,
} from "../../styles/Typography";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const registerUsers = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      console.log(data);
      toast.success("Conta criada com sucesso");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const submit = async (formData) => {
    await registerUsers(formData);
    reset();
  };

  return (
    <StyleRegister onSubmit={handleSubmit(submit)} noValidate>
      <div className="containerForm">
        <div className="containerHeaderForm">
          <TypographyTitles>Crie sua conta</TypographyTitles>
          <TypographySmallTexts>
            Rapido e grátis, vamos nessa
          </TypographySmallTexts>
        </div>
        <TypographySubtitles>Nome</TypographySubtitles>
        <ErrorsMensage>{errors.name?.message}</ErrorsMensage>
        <StylesInputs
          placeholder="Digite aqui seu nome"
          type="text"
          {...register("name")}
        />
        <TypographySubtitles>Email</TypographySubtitles>
        <ErrorsMensage>{errors.email?.message}</ErrorsMensage>
        <StylesInputs
          placeholder="Digite aqui seu email"
          type="email"
          {...register("email")}
        />
        <TypographySubtitles>Senha</TypographySubtitles>
        <ErrorsMensage>{errors.password?.message}</ErrorsMensage>
        <StylesInputs
          placeholder="Digite aqui sua senha"
          type="password"
          {...register("password")}
        />
        <TypographySubtitles>Confirmar senha</TypographySubtitles>
        <ErrorsMensage>{errors.confirmPassword?.message}</ErrorsMensage>
        <StylesInputs
          placeholder="Digite novamente sua senha"
          type="password"
          {...register("confirmPassword")}
        />
        <TypographySubtitles>Bio</TypographySubtitles>
        <ErrorsMensage>{errors.bio?.message}</ErrorsMensage>
        <StylesInputs
          placeholder="Fale sobre você"
          type="text"
          {...register("bio")}
        />
        <TypographySubtitles>Contato</TypographySubtitles>
        <ErrorsMensage>{errors.contact?.message}</ErrorsMensage>
        <StylesInputs
          placeholder="Opção de contato"
          type="number"
          {...register("contact")}
        />
        <TypographySubtitles>Selecionar módulo</TypographySubtitles>
        <ErrorsMensage>{errors.course_module?.message}</ErrorsMensage>
        <select className="selectContainer" {...register("course_module")}>
          <option value="Primeiro módulo  (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo Módulo (Frontend avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </select>
        <StylesButtons className="buttonRegisterSubmit">
          Cadastrar
        </StylesButtons>
      </div>
    </StyleRegister>
  );
};
