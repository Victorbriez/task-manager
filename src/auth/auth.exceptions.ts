import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {
  constructor() {
    super('User already exists', HttpStatus.CONFLICT);
  }
}

export class UserNotFoundException extends HttpException {
  constructor() {
    super('User not found', HttpStatus.NOT_FOUND);
  }
}

export class InvalidPasswordException extends HttpException {
  constructor() {
    super('Invalid password', HttpStatus.UNAUTHORIZED);
  }
}
