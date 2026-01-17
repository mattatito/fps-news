import { createRouter } from "next-connect";
import controller from "infra/controller";
import { UnauthorizedError } from "infra/errors";
import authentication from "models/authentication";

const router = createRouter();

router.post(postHandler);

export default router.handler(controller.errorHandlers);

async function postHandler(request, response) {
  const userInputValues = request.body;

  try {
    const validatedUser = await authentication.getAuthenticatedUser(
      userInputValues.email,
      userInputValues.password,
    );

    console.log(validatedUser);
  } catch (error) {
    throw new UnauthorizedError({
      message: "Dados de autenticação não conferem.",
      action: "Verifique se os dados enviados estão corretos.",
    });
  }

  return response.status(401).json({});
}
