class BaseError extends Error {
  constructor (code, type, message) {
    super(message)
    this.code = code
    this.type = type
  }
}
export default BaseError
