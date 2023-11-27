export class HaircutQuantityLimitError extends Error {
  constructor() {
    super('you have exceeded the limit. go premium for unlimited models')
  }
}
