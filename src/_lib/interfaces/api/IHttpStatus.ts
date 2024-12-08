export default IHttpStatus {
  code: number;
  type: '1xx' | '2xx' | '3xx' | '4xx' | '5xx';
  info: string;
  message: string; 
}
