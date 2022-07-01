import express = require("express");
import { corsOptions } from "../../config/express";
import contentTypeHeaderMiddleware from "../../services/contentTypeHeaderMiddleware";
import expressValidationMiddleware from "../../services/expressValidationMiddleware";
import secretHeaderMiddleware from "../../services/secretHeaderMiddleware";
import { authFunctions } from "./index";
import { param } from "express-validator";
import cors = require("cors");

const auth = express();
auth.use(cors(corsOptions));
auth.use(contentTypeHeaderMiddleware);
auth.use(express.json());

auth.post(
  "/makeAdmin/:id",
  secretHeaderMiddleware,
  param("id").notEmpty(),
  expressValidationMiddleware,
  authFunctions.makeAdmin,
);

export { auth };
