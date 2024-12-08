import HttpStatis from '../../../enums/EHttpStatus';

export default interface IResponseDTO<ID> extends IDTO {
  header: {
    status: HttpStatus;
  };
  body: {
    id: ID;
  };
}
