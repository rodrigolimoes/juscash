import zod from "zod";

export const leadsFormDto = zod.object({
  name: zod.string().min(1, "Campo obrigatório"),
  email: zod.string().email("E-mail inválido").min(1, "Campo obrigatório"),
  phone: zod
    .string()
    .min(1, "Campo obrigatório")
    .regex(new RegExp("([0-9]{2})([0-9]{4,5})([0-9]{4})"), "Telefone inválido"),
});
