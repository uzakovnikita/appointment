import { getEnabledBikes } from '@entities'
import { BikeBucket } from './BikeBucket'

export const BikeBucketServer = async ({
  selectedBikes,
}: {
  selectedBikes: number[]
}) => {
  const allEnabledBikes = await getEnabledBikes()
  await new Promise((res) => setTimeout(() => res('lol'), 2000))

  return (
    <BikeBucket enabledBikes={allEnabledBikes} selectedBikes={selectedBikes} />
  )
}
