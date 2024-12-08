/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import HttpMethod from 'lib/enums/EHttpMethods';

export default interface IApiEndpoint<REQ, RES> {
	url: string;
	method: HttpMethod;
	func: Promise<any>;
	request?: REQ;
	response?: RES;
}
