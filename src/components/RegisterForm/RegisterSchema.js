import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("Compo obrigatorio")
      .min(2, "O minimo de caracteres é 2"),
    email: z
      .string()
      .nonempty("Compo obrigatorio")
      .email("Porfavor insira um email valido"),
    password: z
      .string()
      .nonempty("Compo obrigatorio")
      .regex(/(?=.*\d)/, "Deve conter ao menos um dígito")
      .regex(/(?=.*[a-z])/, "Deve conter ao menos uma letra minúscula")
      .regex(/(?=.*[A-Z])/, "Deve conter ao menos uma letra maiúscula")
      .regex(/(?=.*[$*&@#])/, "Deve conter ao menos um caractere especial")
      .regex(
        /[0-9a-zA-Z$*&@#]{8,}/,
        "Deve conter ao menos 8 dos caracteres mencionados"
      ),
    confirmPassword: z.string().min(1, "A confirmação é obrigatória"),
    bio: z
      .string()
      .nonempty("Compo obrigatorio")
      .min(10, "o minimo de caracteres é 10"),
    contact: z
      .string()
      .nonempty("Compo obrigatorio")
      .min(9, "O contato deve conter no maximo 9 digitos"),
    course_module: z.string().nonempty("Porfavor selecione um dado"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Senha incorreta",
    path: ["confirmPassword"],
  });
