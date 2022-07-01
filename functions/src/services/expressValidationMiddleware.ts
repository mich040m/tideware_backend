import * as express from "express";
import { validationResult } from "express-validator";

export default async function expressValidationMiddleware(
  request: express.Request,
  respone: express.Response,
  next: express.NextFunction,
): Promise<void> {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return respone.status(400).json({ errors: errors.array() }).end();
  } else {
    next();
  }
}
