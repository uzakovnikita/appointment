import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'classnames'

import { mergeClasses } from '@shared'
import { UI_VARIANT, UI_SIZE, getSizes, getVariants } from '..'

export const Chip: FC<
  PropsWithChildren<
    {
      variant: UI_VARIANT
      size: UI_SIZE
    } & ButtonHTMLAttributes<HTMLButtonElement>
  >
> = ({ variant, size, className, children, ...rest }) => {
  const { isPrimary, isSecondary, isTertiary } = getVariants(variant)
  const { isLSize, isMSize, isSSize } = getSizes(size)

  return (
    <button
      className={mergeClasses(
        cn(
          'relative',
          'hover:before:opacity-16',
          'active:before:opacity-24',
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
          'shadow-lg',
          'active:shadow-sm',
          'cursor-pointer',
          'flex',
          'rounded-lg',
          'border-outline-variant',
          'border',
          {
            'bg-primary-fixed-dim': isPrimary,
            'text-on-primary-fixed': isPrimary,
            'before:bg-on-primary-fixed': isPrimary,
            'bg-secondary-fixed-dim': isSecondary,
            'text-on-secondary-fixed': isSecondary,
            'before:bg-on-secondary-fixedr': isSecondary,
            'bg-tertiary-fixed-dim': isTertiary,
            'text-on-tertiary-fixed': isTertiary,
            'before:bg-on-tertiary-fixed': isTertiary,
            'p-1': isSSize,
            'p-2': isMSize,
            'p-4': isLSize,
          },
        ),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
