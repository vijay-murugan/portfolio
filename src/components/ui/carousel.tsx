"use client"

import * as React from "react"

export type CarouselProps = React.ComponentProps<"div">

function Carousel({
  className,
  children,
  ...props
}: CarouselProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}
Carousel.displayName = "Carousel"

export { Carousel }
