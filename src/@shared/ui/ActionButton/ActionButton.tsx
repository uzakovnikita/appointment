import React, { PropsWithChildren, FC, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import { UI_VARIANT, UI_SIZE } from '..'
import { mergeClasses } from '@/@shared/utils'

type OwnProps = {
  variant: UI_VARIANT
  size: UI_SIZE
  className?: string
}

export const ActionButton: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & OwnProps>
> = ({ variant, size, children, className, ...rest }) => {
  const isPrimary = variant === UI_VARIANT.Primary
  const isSecondary = variant === UI_VARIANT.Secondary
  const isTertiary = variant === UI_VARIANT.Tertiary

  const isLSize = size === UI_SIZE.L
  const isMSize = size === UI_SIZE.M
  const isSSize = size === UI_SIZE.S

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
            'min-w-6': isSSize,
            'min-w-8': isMSize,
            'min-w-12': isLSize,
            'min-h-4': isSSize,
            'min-h-6': isMSize,
            'min-h-10': isLSize,
            'p-2': isSSize,
            'p-4': isMSize,
            'p-8': isLSize,
            'rounded-sm': isSSize,
            'rounded-md': isMSize,
            'rounded-lg': isLSize,
          },
        ),
        className,
      )}
    >
      {children}
    </button>
  )
}
