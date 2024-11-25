/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import HttpMethod from 'lib/enums/EHttpMethods';

export default interface IApiEndpoint {
	url: string;
	method: HttpMethod;
	handler: (req: NextRequest, res: NextResponse) => Promise<Response>;
}
