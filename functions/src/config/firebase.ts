import * as admin from "firebase-admin";
import { RuntimeOptions } from "firebase-functions/lib/function-configuration";

admin.initializeApp({
});

const db = admin.firestore();

const maxInstances = 1;
const runWithOptions: RuntimeOptions = {
  maxInstances: maxInstances,
  timeoutSeconds: 30,
};


export { admin, db, runWithOptions };