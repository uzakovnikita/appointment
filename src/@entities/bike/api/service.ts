import { BaseService } from "@/@shared/api";

class BikeService extends BaseService {
  getFreeTimesByBikeFn(bikesIds: number[]) {
    return ({ signal }: { signal: AbortSignal }) =>
      this.apiClient("booking/bikes", {
        searchParams: { bikesIds: bikesIds.join(",") },
        signal,
      });
  }
}

export const bikeService = new BikeService();
