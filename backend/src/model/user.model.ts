import { getModelForClass, prop, pre, DocumentType } from "@typegoose/typegoose";
import argon2 from "argon2";

@pre<User>("save", async function () {
  if (this.isModified("password")) {
    const hash = await argon2.hash(this.password);
    this.password = hash;
    return;
  }
  return;
})
export class User {
  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ lowercase: true, required: true, unique: true })
  email: string;

  @prop({ required: true })
  password: string;

  async validatePassword(this:DocumentType<User>,candidatePassword:string){
    try {
      return await argon2.verify(this.password,candidatePassword)
    } catch (e) {
    console.error(`Could not verify password`, e) 
    return false     
    }
  }
}

const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
  },
});

export default UserModel;
