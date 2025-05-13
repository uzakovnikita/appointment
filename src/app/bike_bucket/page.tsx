import { getEnabledBikes } from '@entities'
import { BikeBucket } from '@widgets'

export default async function BikeBooking({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { bikeIds: filteredBikes } = await searchParams

  const transformedFilteredBikeIds = filteredBikes
    ? String(filteredBikes)
        ?.split(',')
        .map((val) => Number(val))
    : []

  const enabledBikes = await getEnabledBikes()

  await new Promise((res) => setTimeout(() => res('lol'), 2000))

  return (
    <BikeBucket
      enabledBikes={enabledBikes}
      filteredBikeIds={transformedFilteredBikeIds}
    />
  )
}
