import {validationResult} from "express-validator";
import {NextFunction, Request, Response} from "express";
import {ErrorResponseType} from "../types/ErrorTypes";

export const validateRequestParamsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array();

    if (errors.length === 0) {
        return next()
    }

    const response: ErrorResponseType = {
        errorsMessages: errors.map(el => ({message: el.msg, field: el.param}))
    }

    res.status(400).send(response);
}