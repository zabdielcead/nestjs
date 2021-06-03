import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException {
    constructor(customMessage:String) {
      super(`Forbidden ${customMessage}`, HttpStatus.FORBIDDEN);
    }
  }