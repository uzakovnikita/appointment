import { createApi } from "@/@shared/api";

export const bikeApiClient = createApi({
  baseUrl: "/api/bikes",
});
