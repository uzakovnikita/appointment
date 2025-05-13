'use client'

import { useQuery } from '@tanstack/react-query'
import { bikeService } from '../service'

export const QUERY_KEYS = ['free_bikes_by_times']

export const useFreeTimesByBike = ({ bikesIds }: { bikesIds: number[] }) => {
  return useQuery({
    queryKey: [...QUERY_KEYS, { bikesIds }],
    queryFn: bikeService.getFreeTimesByBikeFn(bikesIds),
  })
}
