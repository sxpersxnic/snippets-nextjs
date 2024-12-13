import { UUID } from "lib/types/UUID";

export default interface UserModel {
  id: UUID;
  email: string;
  password: string;
  options?: {}
}