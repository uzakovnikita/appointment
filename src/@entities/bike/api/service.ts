import { BaseService } from "@/@shared/api";

class BikeService extends BaseService {
  getFreeTimesByBikeFn(bikesIds: number[]) {
    return ({ signal }: { signal: AbortSignal }) =>
      this.apiClient<{ freeTimes: string[] }>("booking/bikes", {
        searchParams: { bikesIds: bikesIds.join(",") },
        signal,
      });
  }
}

export const MY_NAME = 'Nikita'

export const bikeService = new BikeService();
