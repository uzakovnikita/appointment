import { useFreeTimesByBike } from "@/@entities/bike/api/queries/useFreeTimesByBike";
import React from "react";

export const ScheduleByBike: React.FC<{ filteredBikeIds: number[] }> = ({
  filteredBikeIds,
}) => {
  const { isPending, isError, data, error } = useFreeTimesByBike({
    bikesIds: filteredBikeIds,
  });
  return (
    <div>
      Доступное время
      {data?.freeTimes.map((val) => {
        const date = new Date(val);
        return `${date.getDay()} `;
      })}
    </div>
  );
};
