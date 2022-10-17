import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../errors/CustomError";

export async function checkCreationToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const creationToken = request.headers.token;

  if (!creationToken) {
    throw new CustomError("Token missing", 401);
  }

  if (creationToken !== process.env.CREATION_TOKEN) {
    throw new CustomError("Wrong token", 401);
  }

  next();
}
