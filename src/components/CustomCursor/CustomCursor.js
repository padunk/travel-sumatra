import React from "react"
import { Cursor } from "../../styles/globalStyles"
import { useGlobalStateContext } from "../../context/globalContext"

function CustomCursor({ toggleNav }) {
  const [mousePost, setMousePost] = React.useState({
    x: 400,
    y: 400,
  })
  const { cursorType, mousePosition } = useGlobalStateContext()

  React.useEffect(() => {
    const onMouseMove = event => {
      const { pageX: x, pageY: y } = event
      setMousePost({ x, y })
    }
    document.addEventListener("mousemove", onMouseMove)
    return () => document.removeEventListener("mousemove", onMouseMove)
  })

  React.useEffect(() => {
    setMousePost({ x: mousePosition[0], y: mousePosition[1] })
  }, [mousePosition])

  return (
    <Cursor
      className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${
        toggleNav ? "nav-open" : ""
      }`}
      style={{ left: `${mousePost.x}px`, top: `${mousePost.y}px` }}
      top={cursorType === "locked" && mousePosition[1]}
      left={cursorType === "locked" && mousePosition[0]}
    />
  )
}

export default CustomCursor
