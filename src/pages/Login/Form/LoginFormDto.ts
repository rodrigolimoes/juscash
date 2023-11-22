import zod from "zod";

export const loginFormDto = zod.object({
  email: zod.string().email("E-mail inválido").min(1, "Campo obrigatório"),
  password: zod.string().min(1, "Campo obrigatório"),
});
