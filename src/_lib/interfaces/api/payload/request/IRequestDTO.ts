export default interface IRequestDTO extends IDTO {
  head: {
    token: string;
  };
  body: {} | string | number | null;
}
