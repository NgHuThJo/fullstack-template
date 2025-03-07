import { z } from "zod";
import { publicProcedure, router } from "./trpc.js";
import { authService } from "#backend/services/auth.js";
import { AppError } from "#backend/utils/app-error.js";
import { emailSchema, passwordSchema } from "shared/src/types/zod.js";

export const authRouter = router({
  loginUser: publicProcedure
    .input(
      z.object({
        email: emailSchema,
        password: passwordSchema,
      }),
    )
    .mutation(async ({ input }) => {
      const { email, password } = input;

      try {
        const user = await authService.loginUser(email, password);

        return user;
      } catch (error) {
        AppError.logError(error);
      }
    }),
});
