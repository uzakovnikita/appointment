import { useFreeTimesByBike } from "@entities";
import { normalizeDate } from "@shared";
import React from "react";

export const ScheduleByBike: React.FC<{ filteredBikeIds: number[] }> = ({
  filteredBikeIds,
}) => {
  const { isPending, data } = useFreeTimesByBike({
    bikesIds: filteredBikeIds,
  });

  return (
    <div>
      Доступное время
      {isPending && <div>Loading...</div>}
      {!isPending &&
        data?.freeTimes.map((val, idx) => {
          const { year, month, day, hours, minutes } = normalizeDate(
            new Date(val)
          );

          return (
            <li key={idx}>
              {hours}:{minutes} - {day}.{month}.{year}
            </li>
          );
        })}
    </div>
  );
};
