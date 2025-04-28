import { getEnabledBikes } from "@/@entities";
import { BikeBucket } from "@/@widgets/BikeBucket";

export default async function BikeBooking({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { bikeIds: filteredBikes } = await searchParams;
  const transformedFilteredBikeIds = filteredBikes ? String(filteredBikes)?.split(",").map(val => Number(val)) : [];

  const enabledBikes = await getEnabledBikes()


  return <BikeBucket enabledBikes={enabledBikes} filteredBikeIds={transformedFilteredBikeIds} />;
}
