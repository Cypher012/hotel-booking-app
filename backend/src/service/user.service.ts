import UserModel, { User } from "../model/user.model";

export const createUser = async (user: Partial<User>) => {
  return await UserModel.create(user);
};

export const findEmail = async (email: string) => {
  return await UserModel.findOne({ email });
};
