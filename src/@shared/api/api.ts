import ky, { HTTPError, TimeoutError as KyTimeoutError } from 'ky'

import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  TimeoutError,
  TooManyRequestsError,
  UnauthorizedError,
} from './errors'

const API_URL = process.env.API_URL || 'http://localhost:3000/api'

const createApiClient = (apiOptions?: Parameters<typeof ky.create>[0]) => {
  const api = ky.create({
    prefixUrl: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  api.extend(apiOptions ?? {})

  return async <T>(
    url: string,
    options?: Parameters<typeof ky.create>[0],
  ): Promise<T> => {
    try {
      return await api(url, { ...options }).json()
    } catch (error) {
      if (error instanceof HTTPError) {
        const { message } = await error.response.json()
        switch (error.response.status) {
          case 400:
            throw new BadRequestError(message)
          case 401:
            throw new UnauthorizedError(message)
          case 404:
            throw new NotFoundError(message)
          case 409:
            throw new ConflictError(message)
          case 429:
            throw new TooManyRequestsError()
          default:
            throw Error(
              'Status code: ' + error.response.status + ' Error: ' + message,
            )
        }
      } else if (error instanceof KyTimeoutError) {
        throw new TimeoutError()
      } else {
        throw error
      }
    }
  }
}

export const appointmentApiClient = createApiClient()
export type ApiClient = <T>(
  url: string,
  options?: Parameters<typeof ky.create>[0],
) => Promise<T>
export class BaseService {
  constructor(protected apiClient: ApiClient = appointmentApiClient) {}
}
