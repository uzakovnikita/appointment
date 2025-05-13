import React from 'react'
import cn from 'classnames'

export const SubmitButton = ({
  children,
  ...rest
}: Omit<React.HTMLProps<HTMLButtonElement>, 'type'>) => {
  return (
    <button
      {...rest}
      className={cn(
        'bg-primary',
        'text-on-primary',
        'rounded-full',
        'px-6 py-3',
        'text-label-lg',
        'relative',
        'hover:before:opacity-8',
        'active:before:opacity-12',
        'disabled:opacity-38',

        "before:content-['']",
        'before:absolute',
        'before:inset-0',
        'before:bg-on-primary',
        'before:opacity-0',
        'before:transition-opacity',

        'transition-shadow',
        'duration-200',
        'ease-standard',

        'shadow-md',
        'active:shadow-sm',
      )}
      type="submit"
    >
      {children}
    </button>
  )
}
