export class UserAlreadyExistsError extends Error {
  constructor() {
    super('An user already exists with the same email')
  }
}
