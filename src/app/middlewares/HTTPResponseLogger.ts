import { response, type NextFunction, type Request, type Response } from "express";
import type { ExpressMiddlewareInterface } from "routing-controllers";

export class HTTPResponseLogger implements ExpressMiddlewareInterface {
    use(request: Request, _response: Response, next: NextFunction) {
        const { originalUrl, method } = request;
        const { statusCode } = response;
        
        console.log(`Received request: method=${method} path=${originalUrl} statusCode${statusCode}`);
        
        next();
    }
}