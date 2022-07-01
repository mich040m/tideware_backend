import { errors, backend } from "../other/constants";
import * as express from "express";

export default function contentTypeHeaderMiddleware(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
): boolean {
  if (request.method == "GET") {
    next();
    return true;
  } else {
    if (request.get("content-type")?.includes("application/json")) {
      next();
      return true;
    } else {
      response.status(415).send({
        error: {
          message: errors.UNSUPPORTED_CONTENT_TYPE_415,
          details: `please use ${backend.SUPPORTED_CONTENT_TYPES}`,
        },
      });
      return false;
    }
  }
}
