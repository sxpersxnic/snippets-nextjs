import { UUID } from "lib/types/UUID";

export default interface ProfileModel {
  id: UUID;
  username: string;
  photo: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}