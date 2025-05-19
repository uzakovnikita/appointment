'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Bike } from '../../../../@entities/bike/model'
import { Props } from './types'
import { ScheduleByBike } from '../ScheduleByBike'
import { ActionButton, Card } from '@shared'
import Link from 'next/link'

export const BikeBucket: React.FC<Props> = ({
  enabledBikes,
  filteredBikeIds,
}) => {
  const [bucket, setBucket] = useState<Bike['id'][]>(filteredBikeIds)
  const pathname = usePathname()

  const addBike = (id: Bike['id']) => {
    setBucket((prev) => [...prev, id])
  }

  const deleteBike = (id: Bike['id']) => {
    setBucket((prev) => prev.filter((bikeId) => bikeId !== id))
  }

  return (
    <div>
      <h2 className="mb-4 p-1 text-lg">Доступные байки:</h2>
      <ul className="grid auto-rows-[1fr] grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
        {enabledBikes.map((bike, i) => {
          return (
            <li key={i} className="relative">
              <Card
                title={bike.name}
                description={bike.description}
                srcImg={bike.img}
                width={200}
                height={133}
                classes={{ root: 'h-full flex-col flex' }}
              >
                <div className="mt-auto">
                  <div className="mt-4 flex flex-col justify-between">
                    <ActionButton
                      disabled={bucket.includes(bike.id)}
                      onClick={() => addBike(bike.id)}
                      variant="secondary"
                      size="s"
                      className="flex justify-center"
                    >
                      <span className="font-bold">Выбрать</span>
                    </ActionButton>

                    <ActionButton
                      disabled={!bucket.includes(bike.id)}
                      onClick={() => deleteBike(bike.id)}
                      variant="tertiary"
                      size="s"
                      className="mt-2 flex justify-center"
                    >
                      <span className="font-bold">Удалить</span>
                    </ActionButton>
                  </div>
                </div>
              </Card>
            </li>
          )
        })}
      </ul>
      <p className="mt-6 mb-2 p-1">Выбрано:</p>
      <ul>
        {bucket.map((id) => {
          return (
            <li
              key={id}
              className="bg-surface-container text-on-surface border-outline-variant flex items-center justify-between rounded-lg border p-2 not-first:mt-2"
            >
              {enabledBikes.find((bike) => bike.id === id)?.name}
              <ActionButton
                size="s"
                variant="tertiary"
                onClick={() => deleteBike(id)}
              >
                Удалить
              </ActionButton>
            </li>
          )
        })}
      </ul>
      <data className="mt-2 flex justify-start">
        <ActionButton
          variant="secondary"
          size="m"
          disabled={bucket.length < 1}
          onClick={() => setBucket([])}
          className="mr-2"
        >
          <span className="font-bold">Сбросить</span>
        </ActionButton>
        <Link href={`${pathname}?bikeIds=${bucket.join(',')}`} replace>
          <ActionButton variant="primary" size="m" disabled={bucket.length < 1}>
            <span className="font-bold">Применить</span>
          </ActionButton>
        </Link>
      </data>

      {filteredBikeIds.length > 0 && (
        <ScheduleByBike filteredBikeIds={filteredBikeIds} />
      )}
    </div>
  )
}
