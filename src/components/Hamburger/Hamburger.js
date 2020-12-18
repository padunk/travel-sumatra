import React from "react"
import { HamburgerButton } from "../../styles/headerStyles"

const Hamburger = props => {
  return (
    <HamburgerButton>
      {props.closed ? (
        <>
          <span className="closed-hamburger--left"></span>
          <span className="closed-hamburger--right"></span>
        </>
      ) : (
        <>
          <span></span>
          <span></span>
        </>
      )}
    </HamburgerButton>
  )
}

export { Hamburger }
