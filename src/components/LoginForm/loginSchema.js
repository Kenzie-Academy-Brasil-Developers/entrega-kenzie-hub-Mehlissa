import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Porfavor preencha os campos")
    .email("Porfavor insira um email"),
  password: z
    .string()
    .nonempty("Porfavor preencha os campos")
    .regex(/(?=.*\d)/, "Deve conter ao menos um dígito")
    .regex(/(?=.*[a-z])/, "Deve conter ao menos uma letra minúscula")
    .regex(/(?=.*[A-Z])/, "Deve conter ao menos uma letra maiúscula")
    .regex(/(?=.*[$*&@#])/, "Deve conter ao menos um caractere especial")
    .regex(
      /[0-9a-zA-Z$*&@#]{8,}/,
      "Deve conter ao menos 8 dos caracteres mencionados"
    ),
});
