import React from 'react'

export const CardSkeleton: React.FC<
  React.PropsWithChildren<{
    maxWidth: number
    minWidth: number
    maxHeight: number
    minHeight: number
  }>
> = ({ children }) => {
  return (
    <div className="bg-surface-container-low border-outline-variant text-on-surface rounded-md border p-2">
      {/* image */}
      <div className="bg-on-surface min-h-[110px] min-w-[165px]"></div>
      {/* title */}
      <div className="bg-on-surface mt-2 h-7.5 w-3/4 rounded"></div>
      {/* description */}
      <div className="bg-on-surface mt-2 h-5 w-full rounded"></div>
      <div className="bg-on-surface mt-2 h-5 w-full rounded"></div>
      <div className="bg-on-surface mt-2 h-5 w-full rounded"></div>
      <div className="bg-on-surface mt-1 h-5 w-2/3 rounded" />
      {children}
    </div>
  )
}
