'use client'

import React from 'react'
import { ActionButton, CardSkeleton } from '@shared'

export const BikeBucketSkeleton: React.FC = () => {
  return (
    <div className="bg-surface-bright animate-pulse rounded-sm p-1">
      {/* Заголовок */}
      <h2 className="mb-4 p-1 text-lg">Доступные байки:</h2>

      {/* Список карточек */}
      <ul className="grid auto-rows-[1fr] grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
        {[1, 2, 3, 4].map((i) => (
          <li key={i} className="relative">
            <CardSkeleton
              maxWidth={360}
              minWidth={165}
              minHeight={200}
              maxHeight={180}
            >
              {/* Кнопки */}
              <div className="mt-auto">
                <div className="mt-4 flex flex-col justify-between">
                  <ActionButton
                    disabled
                    variant="primary"
                    size="s"
                    className="flex justify-center"
                  >
                    <span className="font-bold">Выбрать</span>
                  </ActionButton>

                  <ActionButton
                    disabled
                    variant="secondary"
                    size="s"
                    className="mt-2 flex justify-center"
                  >
                    <span className="font-bold">Удалить</span>
                  </ActionButton>
                </div>
              </div>
            </CardSkeleton>
          </li>
        ))}
      </ul>

      <p className="mt-6 mb-2 p-1">Выбрано:</p>
      <data className="mt-2 flex justify-center">
        <ActionButton variant="primary" size="l" disabled={true}>
          <span className="font-bold">Применить выбранное</span>
        </ActionButton>
      </data>
    </div>
  )
}
