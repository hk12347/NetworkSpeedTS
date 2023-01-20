/**
 *  Add error handling for missing resources
 */
import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const message = "Resource not found. Check <a href='/docs'>API documentation</a>";

    response.status(404).send(message);
};