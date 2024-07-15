import { createSafeActionClient } from "next-safe-action";
import {
  BadRequestError,
  NotFoundError,
  InternalServerError,
  ConflictError,
  ForbiddenError,
  UnAuthenticatedError,
} from "./error";
import { z } from "zod";

export const actionClient = createSafeActionClient({
  handleReturnedServerError: (error) => {
    if (error instanceof BadRequestError) {
      return {
        message: error.message,
        statusCode: error.statusCode,
      };
    } else if (error instanceof NotFoundError) {
      return {
        message: error.message,
        statusCode: error.statusCode,
      };
    } else if (error instanceof ConflictError) {
      return {
        message: error.message,
        statusCode: error.statusCode,
      };
    } else if (error instanceof ForbiddenError) {
      return {
        message: error.message,
        statusCode: error.statusCode,
      };
    } else if (error instanceof UnAuthenticatedError) {
      return {
        message: error.message,
        statusCode: error.statusCode,
      };
    } else if (error instanceof InternalServerError) {
      return {
        message: error.message,
        statusCode: error.statusCode,
      };
    }
  },
  handleServerErrorLog(originalError) {
    console.error(`${originalError.name}:`, originalError.message);
  },
  defineMetadataSchema: () => z.object({ actionName: z.string() }),
});
