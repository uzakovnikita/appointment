'use client'

import Image from 'next/image'
import React from 'react'
import { mergeClasses } from '@shared'

type Props = {
  srcImg: string
  title: string
  description: string
  width: number
  height: number
  classes?: {
    root?: string
    title?: string
    description?: string
    img?: string
  }
}

export const Card: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  srcImg,
  title,
  description,
  width,
  height,
  classes,
}) => {
  return (
    <div
      className={mergeClasses(
        'bg-surface-container-low border-outline-variant text-on-surface rounded-md border p-2',
        classes?.root,
      )}
    >
      <Image
        src={srcImg}
        alt={title}
        width={width}
        height={height}
        className={mergeClasses(classes?.img)}
      />
      <p className={mergeClasses('mt-2 text-xl', classes?.title)}>{title}</p>
      <p className={mergeClasses('text-m mt-2', classes?.description)}>
        {description}
      </p>
      {children}
    </div>
  )
}
