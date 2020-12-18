import * as React from "react"

export function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState([0, 0])

  React.useLayoutEffect(() => {
    function handleResize() {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
