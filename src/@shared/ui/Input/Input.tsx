import cn from 'classnames'

export const Input = ({
  error,
  ...rest
}: React.HTMLProps<HTMLInputElement> & {
  error?: boolean
}) => {
  return (
    <input
      className={cn(
        'w-full px-3 py-2',
        'bg-surface-container-highest',
        'text-on-surface',
        'border-outline border-2',
        'rounded-md',
        'text-body-md',
        'placeholder:text-on-surface-variant/50',
        'hover:border-primary',
        'focus:border-primary',
        'disabled:bg-on-surface/12 disabled:border-on-surface/12',
        'transition-colors duration-200',
        'peer',
        'focus:outline-none',
        'active:outline-none',
        error && 'border-error focus:border-error focus:ring-error',
      )}
      {...rest}
    />
  )
}
