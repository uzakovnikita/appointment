'use client'

import React from 'react'
import { ActionButton, CardSkeleton, UI_SIZE, UI_VARIANT } from '@shared'

export const BikeBucketSkeleton: React.FC = () => {
  return (
    <div>
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
                    variant={UI_VARIANT.Secondary}
                    size={UI_SIZE.S}
                    className="flex justify-center"
                  >
                    <span className="font-bold">Выбрать</span>
                  </ActionButton>

                  <ActionButton
                    disabled
                    variant={UI_VARIANT.Tertiary}
                    size={UI_SIZE.S}
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
        <ActionButton
          variant={UI_VARIANT.Primary}
          size={UI_SIZE.M}
          disabled={true}
        >
          <span className="font-bold">Применить выбранное</span>
        </ActionButton>
      </data>
    </div>
  )
}
