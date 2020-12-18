import * as React from "react"

export function useElementPosition(el) {
  const [elementPosition, setElementPosition] = React.useState([0, 0])
  let element = el.current
  let { width, height, x, y } = element.getBoundingClientRect()

  React.useLayoutEffect(() => {
    function handlePosition() {
      let centerX = x + width / 2
      let centerY = y + height / 2 + document.documentElement
      console.log(y, height)

      setElementPosition([centerX, centerY])
    }

    handlePosition()
  }, [y])

  return elementPosition
}
