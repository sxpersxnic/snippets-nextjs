/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import HttpMethod from 'lib/enums/EHttpMethods';

export default interface IApiEndpoint {
	url: string;
	method: HttpMethod;
	handler: () => Promise<>;
	payload: {
	  request?: ;
	  response?: ;
	};
}
