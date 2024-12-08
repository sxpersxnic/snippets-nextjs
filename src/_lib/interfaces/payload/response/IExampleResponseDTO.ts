import Role from '../../../enums/ERole';

export default interface IExampleResponseDTO {
  id: string;
  token: string;
  role: Role;
}
