import React, { PropsWithChildren, FC, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import { mergeClasses } from '@/@shared/utils'

type OwnProps = {
  variant: 'primary' | 'secondary' | 'tertiary'
  size: 'l' | 'm' | 's'
  className?: string
}

export const ActionButton: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & OwnProps>
> = ({ variant, size, children, className, ...rest }) => {
  const isPrimary = variant === 'primary'
  const isSecondary = variant === 'secondary'
  const isTertiary = variant === 'tertiary'

  return (
    <button
      {...rest}
      className={mergeClasses(
        cn(
          'relative',
          'hover:before:opacity-8',
          'active:before:opacity-12',
          'disabled:opacity-38',
          'disabled:hover:before:opacity-0',
          'disabled:active:before:opacity-0',
          "before:content-['']",
          'before:absolute',
          'before:inset-0',
          'before:opacity-0',
          'before:transition-opacity',
          'transition-shadow',
          'duration-200',
          'ease-standard',
          'shadow-md',
          'active:shadow-sm',
          'cursor-pointer',
          'flex',
          {
            'bg-primary-container': isPrimary,
            'text-on-primary-container': isPrimary,
            'before:bg-on-primary-container': isPrimary,
            'bg-secondary-container': isSecondary,
            'text-on-secondary-container': isSecondary,
            'before:bg-on-secondary-container': isSecondary,
            'bg-tertiary-container': isTertiary,
            'text-on-tertiary-container': isTertiary,
            'before:bg-on-tertiary-container': isTertiary,
            'min-w-6': size === 's',
            'min-w-8': size === 'm',
            'min-w-12': size === 'l',
            'min-h-4': size === 's',
            'min-h-6': size === 'm',
            'min-h-10': size === 'l',
            'p-2': size === 's',
            'p-4': size === 'm',
            'p-8': size === 'l',
            'rounded-sm': size === 's',
            'rounded-md': size === 'm',
            'rounded-lg': size === 'l',
          },
        ),
        className,
      )}
    >
      {children}
    </button>
  )
}
