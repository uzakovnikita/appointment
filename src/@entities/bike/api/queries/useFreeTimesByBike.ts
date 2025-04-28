import { useQuery } from "@tanstack/react-query";
import { bikeApiClient } from "../api";

export const QUERY_KEYS = ["free_bikes_by_times"];

export const useFreeTimesByBike = ({ bikesIds }: { bikesIds: number[] }) => {
  return useQuery({
    queryKey: [...QUERY_KEYS, { bikesIds }],
    queryFn: async ({ queryKey }): Promise<{ freeTimes: string[] }> => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, vars] = queryKey;
      const query = {
        bikesIds: "",
      };
      if (typeof vars === "object" && "bikesIds" in vars) {
        query.bikesIds = bikesIds.join(",");
      }

      const result = await bikeApiClient<{ freeTimes: string[] }>({
        options: {
          query: {
            bikesIds: bikesIds.join(","),
          },
        },
      });

      return result;
    },
  });
};
