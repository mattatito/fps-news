import { UnauthorizedError } from "infra/errors";
import userModel from "models/user";
import passwordModel from "models/password";

async function getAuthenticatedUser(email, password) {
  const correctPasswordMatch = await passwordModel.compare(
    password,
    storedUser.password,
  );
  const storedUser = await userModel.findOneByEmail(email);
  if (!correctPasswordMatch) {
    throw new UnauthorizedError({
      message: "Senha não confere.",
      action: "Verifique se este dado está correto.",
    });
  }

  return storedUser;
}

const authentication = {
  getAuthenticatedUser,
};

export default authentication;
