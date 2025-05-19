import {
  BikeBucketServer,
  BikeBucketSkeleton,
  BikeScheduleServer,
  BikeScheduleSkeleton,
} from '@widgets'
import { SELECTED_BIKE_IDS_QUERY } from '@shared'
import { Suspense } from 'react'

export default async function SelectBike({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { [SELECTED_BIKE_IDS_QUERY]: selectedBikeIdsQuery } = await searchParams

  const selectedBikes = selectedBikeIdsQuery
    ? String(selectedBikeIdsQuery)
        ?.split(',')
        .map((val) => Number(val))
    : []

  return (
    <div>
      <Suspense
        fallback={<BikeBucketSkeleton selectedCounter={selectedBikes.length} />}
      >
        <BikeBucketServer selectedBikes={selectedBikes} />
      </Suspense>
      <div className="mt-4">
        <Suspense
          fallback={
            <BikeScheduleSkeleton
              hasSelectedBikes={selectedBikes.length !== 0}
            />
          }
        >
          <BikeScheduleServer selectedBikes={selectedBikes} />
        </Suspense>
      </div>
    </div>
  )
}
