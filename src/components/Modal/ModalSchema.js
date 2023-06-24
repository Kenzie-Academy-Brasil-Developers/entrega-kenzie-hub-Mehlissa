import { z } from "zod";

export const ModalSchema = z.object({
  title: z.string().nonempty("Campo obrigatorio"),
  status: z.string().nonempty("Campo obrigatorio"),
});
