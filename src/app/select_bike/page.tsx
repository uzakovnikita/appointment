import { getEnabledBikes } from '@entities'
import { BikeBucket, BikeSchedule } from '@widgets'
import { SELECTED_BIKE_IDS_QUERY } from '@shared'

export default async function SelectBike({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { [SELECTED_BIKE_IDS_QUERY]: filteredBikes } = await searchParams

  const allEnabledBikes = await getEnabledBikes()

  const selectedBikes = filteredBikes
    ? String(filteredBikes)
        ?.split(',')
        .map((val) => Number(val))
    : []

  await new Promise((res) => setTimeout(() => res('lol'), 2000))

  return (
    <div>
      <BikeBucket
        enabledBikes={allEnabledBikes}
        selectedBikes={selectedBikes}
      />
      {selectedBikes.length > 0 && (
        <div className="mt-4">
          <BikeSchedule selectedBikes={selectedBikes} />
        </div>
      )}
    </div>
  )
}
