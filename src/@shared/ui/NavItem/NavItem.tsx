import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { mergeClasses } from '@shared'

type Props = {
  text: string
  href: string
  className?: string
  replace?: boolean
}

export const NavItem: FC<Props> = ({ text, href, className, replace }) => {
  return (
    <div
      className={mergeClasses(
        cn(
          'text-on-surface',
          'rounded-md',
          'p-2',
          'relative',
          'hover:before:opacity-12',
          'active:before:opacity-16',
          "before:content-['']",
          'before:absolute',
          'before:inset-0',
          'before:bg-surface',
          'before:opacity-0',
          'before:transition-opacity',
          'transition-shadow',
          'duration-200',
          'ease-standard',
          'inline-flex',
          'before:pointer-events-none',
        ),
        className,
      )}
    >
      <Link replace={replace} href={href}>
        {text}
      </Link>
    </div>
  )
}
