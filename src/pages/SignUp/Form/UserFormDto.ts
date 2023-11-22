import zod from "zod";

export const userFormDto = zod
  .object({
    name: zod.string().min(1, "Campo obrigatório"),
    email: zod.string().email("E-mail inválido").min(1, "Campo obrigatório"),
    password: zod
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "A senha deve conter pelo menos 1 caractere especial"
      )
      .regex(
        new RegExp(".*\\d.*"),
        "A senha deve conter pelo menos 1 caractere numérico"
      )
      .regex(
        new RegExp(".*[a-zA-Z0-9].*"),
        "A senha deve conter pelo menos 1 caractere alfanumérico"
      ),
    confirmPassword: zod
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type UserForm = zod.infer<typeof userFormDto>;
