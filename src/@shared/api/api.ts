import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  TooManyRequestsError,
  UnauthorizedError,
} from "./errors";

const API_HOST_URL = process.env.API_HOST_URL || "http://localhost:3000";

export const createApi =
  ({
    baseUrl,
    baseOptions,
    host,
  }: {
    baseUrl: string;
    baseOptions?: RequestInit;
    host?: string;
  }) =>
  async <T = unknown>({
    endpoint,
    options,
  }: {
    endpoint?: string;
    options?: RequestInit & {
      query: Record<string, string | number | boolean>;
    };
  }): Promise<T> => {
    const { headers: baseHeaders = {} } = baseOptions ?? {};
    const { headers: inputHeaders = {}, query } = options ?? {};

    const commonHeaders = {
      "Content-Type": "application/json",
    };

    const mergedHeaders = {
      ...commonHeaders,
      ...baseHeaders,
      ...inputHeaders,
    };

    let url = new URL(baseUrl, host || API_HOST_URL);

    if (endpoint) {
      url = new URL(endpoint, url);
    }

    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        url.searchParams.set(key, String(value));
      });
    }

    const response = await fetch(url, {
      ...baseOptions,
      ...options,
      headers: mergedHeaders,
    });

    const isJson = response.headers
      .get("content-type")
      ?.includes("application/json");
    const data = isJson ? await response.json() : null;
    if (response.ok) {
      return data;
    } else {
      const errorMessage = data.error;
      switch (response.status) {
        case 400:
          throw new BadRequestError(errorMessage);
        case 401:
          throw new UnauthorizedError(errorMessage);
        case 404:
          throw new NotFoundError(errorMessage);
        case 409:
          throw new ConflictError(errorMessage);
        case 429:
          throw new TooManyRequestsError();
        default:
          throw Error(
            "Status code: " + response.status + " Error: " + errorMessage
          );
      }
    }
  };
