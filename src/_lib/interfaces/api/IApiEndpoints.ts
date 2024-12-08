/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import HttpMethod from 'lib/enums/EHttpMethods';
import URI from 'lib/enums/EURL';
import Request from './payload/request/IRequestDTO';
import Response from './payload/response/IResponseDTO';

export default interface IApiEndpoint {
	url: URI | string;
	method: HttpMethod;
	handler: (req: Request, res: Response) => Promise<Response>;
	payload: {
	  request?: Request;
	  response?: Response;
	};
}
