import { BaseService } from '@shared'

class BikeService extends BaseService {
  getFreeTimesByBikeFn(bikesIds: number[]) {
    return ({ signal }: { signal: AbortSignal }) =>
      this.apiClient<{ freeTimes: string[] }>('booking/bikes', {
        searchParams: { bikesIds: bikesIds.join(',') },
        signal,
      })
  }
}

export const bikeService = new BikeService()
