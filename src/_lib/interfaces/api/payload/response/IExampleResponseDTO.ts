import Role from '../../../enums/ERole';
import IResponseDTO from './IResponseDTO';

export default interface IExampleResponseDTO extends IResponseDTO {
  header: {};
  body: {
    id: string;
    token: string;
    role: Role;
  };
}
