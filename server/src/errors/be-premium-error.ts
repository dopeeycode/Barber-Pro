export class BePremiumError extends Error {
  constructor(readonly message: string) {
    super(message)
  }
}
