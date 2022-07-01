import { Request, Response } from "firebase-functions";
import * as admin from "firebase-admin";
import { errors } from "../../../other/constants";

export default async function makeAdmin(
  request: Request,
  response: Response,
): Promise<void> {
  const userId = request.params.id;

  try {
    await admin.auth().setCustomUserClaims(userId, { admin: true });
    return response
      .status(200)
      .send({
        message: "User made admin",
        data: { id: userId },
      })
      .end();
  } catch (error) {
    console.error(error);
    return response
      .status(400)
      .send({
        error: {
          message: errors.BAD_REQUEST_400,
          details:
            // eslint-disable-next-line max-len
            "Something went wrong",
        },
      })
      .end();
  }
}
