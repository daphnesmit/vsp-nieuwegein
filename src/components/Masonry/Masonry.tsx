import React, { useEffect, useRef, useState } from 'react'
import { Col, MasonryDiv } from './styles'
import { useEventListener } from '@/utils/hooks/useEventListener'

const fillCols = (children: React.ReactElement[], cols: any[]) => {
  // @ts-ignore
  children.forEach((child, i) => cols[i % cols.length].push(child))
}

interface Masonryprops {
  children: React.ReactElement[]
  gap?: string
  minWidth?: number
}

const Masonry = ({ children, gap, minWidth = 500, ...rest }: Masonryprops) => {
  const ref = useRef<HTMLDivElement>()
  const [numCols, setNumCols] = useState<number>(3)
  const cols = [...Array(numCols)].map(() => [])
  fillCols(children, cols)

  const resizeHandler = () => setNumCols(Math.ceil(ref?.current?.offsetWidth / minWidth))
  useEffect(resizeHandler, [])
  useEventListener(`resize`, resizeHandler)

  return (
    <MasonryDiv ref={ref} gap={gap} {...rest}>
      {[...Array(numCols)].map((_, index) => (
        <Col key={index} gap={gap}>
          {cols[index]}
        </Col>
      ))}
    </MasonryDiv>
  )
}

export default Masonry
