import cn from 'classnames'
import React from 'react'

export const Field = ({
  children,
  name,
  error,
}: React.PropsWithChildren & {
  name: string
  error?: string
}) => {
  return (
    <div className="flex flex-col gap-1 font-normal">
      <label
        htmlFor={name}
        className={cn(
          'text-lgabel-md text-on-surface-variant transition-all',
          'peer-focus:text-primary peer-disabled:text-on-surface/38',
        )}
      >
        {name}
      </label>

      {children}

      {error ? (
        <div className="text-lgabel-md text-error flex items-center gap-1">
          {error}
        </div>
      ) : (
        <div className="h-6" />
      )}
    </div>
  )
}
