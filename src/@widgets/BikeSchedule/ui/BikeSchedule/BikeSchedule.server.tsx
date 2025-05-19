import React from 'react'

import { normalizeDate, Chip, UI_VARIANT, UI_SIZE } from '@shared'

const getScheduleByBike = async (bikes: number[]): Promise<Schedule> => {
  console.log(bikes)
  return new Promise((res) => {
    setTimeout(
      () =>
        res({
          2025: {
            Май: {
              19: [new Date(), new Date(), new Date(), new Date(), new Date()],
              20: [new Date(), new Date(), new Date(), new Date(), new Date()],
              21: [new Date(), new Date(), new Date(), new Date(), new Date()],
              22: [
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
              ],
              23: [new Date(), new Date(), new Date(), new Date(), new Date()],
              24: [new Date(), new Date(), new Date(), new Date(), new Date()],
              25: [new Date(), new Date(), new Date(), new Date(), new Date()],
            },
          },
        }),
      2000,
    )
  })
}

type Schedule = {
  [key: number]: {
    [month: string]: {
      [day: number]: Date[]
    }
  }
}

export const BikeScheduleServer: React.FC<{
  selectedBikes: number[]
}> = async ({ selectedBikes }) => {
  const schedule: Schedule = await getScheduleByBike(selectedBikes)

  const d = Object.entries(schedule).map(([, month], idx) => {
    return (
      <div key={idx}>
        {Object.entries(month).map(([month, day], idx) => {
          return (
            <div key={idx}>
              <h3 className="mb-2 capitalize">{month}</h3>
              {Object.entries(day).map(([currentDay, dates], idx) => {
                return (
                  <div key={idx}>
                    <h4 className="mt-4">{currentDay} число</h4>

                    <div className="mt-1 flex flex-wrap gap-1">
                      {dates.map((date, idx) => {
                        const { hours, minutes } = normalizeDate(date)
                        return (
                          <Chip
                            size={UI_SIZE.S}
                            variant={UI_VARIANT.Primary}
                            key={idx}
                            className=""
                          >
                            {hours}:{minutes}
                          </Chip>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  })

  return (
    <div>
      <h2 className="p-1 text-lg">Доступное время:</h2>
      <div className="border-outline-variant mt-2 min-h-4 rounded-md border p-2">
        {d}
      </div>
    </div>
  )
}
