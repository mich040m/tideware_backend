import express = require("express");
import { constants, errors } from "../other/constants";

export default function secretHeaderMiddleware(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
): void {
  if (request.get("Secret") == constants.SECRET_KEY) {
    next();
  } else {
    response.status(500).send({
      error: {
        message: errors.INTERNAL_ERROR_500,
      },
    });
  }
}
