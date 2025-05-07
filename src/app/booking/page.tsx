import { Booking } from "@widgets";

export default async function Page() {
  return <Booking dates={(new Date(), new Date())} />;
}
