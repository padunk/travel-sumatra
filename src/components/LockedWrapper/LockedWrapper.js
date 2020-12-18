import React from "react"
import { LockedDivStyles } from "../../styles/headerStyles"
// import { useElementPosition } from "../../hooks/useElementPosition"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext"

// forward Ref
const LockedWrapper = props => {
  const hamburg = React.useRef(null)
  const { cursorStyle } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  function updateElementPosition(el) {
    let element = el.current
    let { width, height, x, y } = element.getBoundingClientRect()
    let centerX = x + width / 2
    let centerY = y + height / 2 + document.documentElement.scrollTop

    return [centerX, centerY]
  }

  let mousePosition = React.useRef([0, 0])

  const onCursor = cursorType => {
    cursorType = (cursorStyle.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType })
  }

  const menuHover = () => {
    onCursor("locked")
    dispatch({ type: "MENU_HOVER", mousePosition })
  }

  React.useEffect(() => {
    mousePosition.current = updateElementPosition(hamburg)
  })

  React.useEffect(() => {
    if (props.animationComplete) {
      // update the ref position
      mousePosition.current = updateElementPosition(hamburg)
    }
  }, [props.animationComplete])

  return (
    <LockedDivStyles
      ref={hamburg}
      onMouseEnter={menuHover}
      onMouseLeave={onCursor}
      {...props}
    >
      {props.children}
    </LockedDivStyles>
  )
}

export { LockedWrapper }
