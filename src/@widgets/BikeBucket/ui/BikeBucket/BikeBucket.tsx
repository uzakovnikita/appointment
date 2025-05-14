'use client'

import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Bike } from '../../../../@entities/bike/model'
import { Props } from './types'
import { ScheduleByBike } from '../ScheduleByBike'

export const BikeBucket: React.FC<Props> = ({
  enabledBikes,
  filteredBikeIds,
}) => {
  const [bucket, setBucket] = useState<Bike['id'][]>(filteredBikeIds)
  const router = useRouter()
  const pathname = usePathname()

  const addBike = (id: Bike['id']) => {
    setBucket((prev) => [...prev, id])
  }

  const deleteBike = (id: Bike['id']) => {
    setBucket((prev) => prev.filter((bikeId) => bikeId !== id))
  }

  const applySelectedBikes = () => {
    router.push(`${pathname}?bikeIds=${bucket.join(',')}`)
  }

  return (
    <div className="bg-surface-container-highest text-on-surface rounded-m">
      <ul>
        {enabledBikes.map((bike, i) => {
          return (
            <li key={i} onClick={() => addBike(bike.id)}>
              {bike.name}
              <button disabled={bucket.includes(bike.id)}>выбрать</button>
            </li>
          )
        })}
      </ul>
      {bucket.length > 0 && <p>Вы выбрали следующие байки:</p>}
      <ul>
        {bucket.map((id) => {
          return (
            <li key={id}>
              {enabledBikes.find((bike) => bike.id === id)?.name}
              <button onClick={() => deleteBike(id)}>Удалить</button>
            </li>
          )
        })}
      </ul>
      <button onClick={applySelectedBikes}>Применить выбранное</button>

      {filteredBikeIds.length > 0 && (
        <ScheduleByBike filteredBikeIds={filteredBikeIds} />
      )}
    </div>
  )
}
