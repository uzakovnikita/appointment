class BaseApiError extends Error {
  public status?: number
  constructor({ message, status }: { message?: string; status?: number }) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export class BadRequestError extends BaseApiError {
  constructor(message: string) {
    super({ message, status: 400 })
    this.name = 'BadRequestError'
  }
}

export class UnauthorizedError extends BaseApiError {
  constructor(message: string) {
    super({ message, status: 401 })
    this.name = 'UnauthorizedError'
  }
}

export class NotFoundError extends BaseApiError {
  constructor(message: string) {
    super({ message, status: 404 })
    this.name = 'NotFoundError'
  }
}

export class ConflictError extends BaseApiError {
  constructor(message: string) {
    super({ message, status: 409 })
    this.name = 'ConflictError'
  }
}

export class TooManyRequestsError extends BaseApiError {
  constructor() {
    super({ message: 'TooManyRequestsError', status: 429 })
    this.name = 'TooManyRequestsError'
  }
}

export class TimeoutError extends BaseApiError {
  constructor() {
    super({ message: 'TimeoutError' })
    this.name = 'TimeoutError'
  }
}
