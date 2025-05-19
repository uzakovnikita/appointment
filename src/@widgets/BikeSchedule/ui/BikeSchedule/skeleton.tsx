import { Chip, UI_SIZE, UI_VARIANT } from '@/@shared'

export const BikeScheduleSkeleton = ({
  hasSelectedBikes,
}: {
  hasSelectedBikes: boolean
}) => {
  return (
    <div>
      <h2 className="p-1 text-lg">Доступное время:</h2>
      {hasSelectedBikes && (
        <div className="border-outline-variant mt-2 animate-pulse rounded-md border p-2">
          <div>
            <div>
              <h3 className="bg-on-background mb-2 min-h-6 w-8 rounded">
                {''}
              </h3>
              <div>
                <h4 className="bg-on-background mt-4 min-h-6 w-16 rounded">
                  {''}
                </h4>
                <div className="mt-1 flex flex-wrap gap-1">
                  {[1, 2, 3, 4, 5].map((date, idx) => {
                    return (
                      <Chip
                        size={UI_SIZE.S}
                        variant={UI_VARIANT.Primary}
                        key={idx}
                        className="min-h-8 min-w-12"
                      ></Chip>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
