import Link from 'next/link'
import cn from 'classnames'

export const Header = () => {
  return (
    <header className="bg-surface-container-high text-on-surface rounded-m p-4">
      <h1 className="text-xl">Прокат мототехники &rdquo;Эндуро 18&rdquo;</h1>
      <div className="mt-6">
        <Link
          href="/"
          className={cn(
            'bg-secondary',
            'text-on-secondary',
            'rounded-m',
            'p-2',
            'relative',
            'hover:before:opacity-8',
            'active:before:opacity-12',
            "before:content-['']",
            'before:absolute',
            'before:inset-0',
            'before:bg-on-primary',
            'before:opacity-0',
            'before:transition-opacity',
            'transition-shadow',
            'duration-200',
            'ease-standard',
          )}
        >
          На главную
        </Link>
      </div>
    </header>
  )
}
