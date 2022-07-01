import * as functions from "firebase-functions";
import "reflect-metadata";
import { constants } from "./other/constants";
import { runWithOptions } from "./config/firebase";
import { auth } from "./microservices/auth/authController";

exports.auth = functions
  .region(constants.DEFAULT_REGION)
  .runWith(runWithOptions)
  .https.onRequest(auth);

// exports.questionCreateTrigger = questionCreateTrigger;
