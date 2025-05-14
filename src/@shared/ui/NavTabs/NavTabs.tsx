'use client'

import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

type Props = {
  tabs: {
    href: string
    text: string
  }[]
}

export const NavTabs: React.FC<Props> = ({ tabs }) => {
  return (
    <nav className="bg-surface-bright rounded-m flex items-center justify-between p-4">
      {tabs.map((tab, idx) => {
        return (
          <Link
            href={tab.href}
            key={idx}
            className={cn(
              'bg-primary',
              'text-on-primary',
              'grow-[0.4]',
              'relative',
              'p-3',
              'py-5',
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

              'shadow-md',
              'active:shadow-sm',
              'cursor-pointer',
              'justify-self-center',
              'flex',
              'justify-center',
              'text-center',
              'rounded-m',
              'text-m',
              'font-medium',
            )}
          >
            {tab.text}
          </Link>
        )
      })}
    </nav>
  )
}
