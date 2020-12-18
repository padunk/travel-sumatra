import React from "react"
import { HeaderNav, Logo } from "../../styles/headerStyles"
import { Container, Flex } from "../../styles/globalStyles"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
  useGlobalOnCursorContext,
} from "../../context/globalContext"
import { useEffect } from "react"
import { customEase } from "../../constants/constants"
import { LockedWrapper } from "../LockedWrapper/LockedWrapper"
import Link from "../Link/Link"
import { Hamburger } from "../Hamburger/Hamburger"

function Header({ toggleNav, setToggleNav }) {
  const [animationComplete, setAnimationComplete] = React.useState(false)
  const { currentTheme } = useGlobalStateContext()
  const dispatchTheme = useGlobalDispatchContext()
  const onCursor = useGlobalOnCursorContext()

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatchTheme({
        type: "TOGGLE_THEME",
        theme: "light",
      })
    } else {
      dispatchTheme({
        type: "TOGGLE_THEME",
        theme: "dark",
      })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: customEase }}
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      <Container fluid>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/" cursor="pointer">
              TRAVEL SUMATRA
            </Link>
            <span
              role='button'
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("change-theme")}
              onMouseLeave={onCursor}
            />
          </Logo>
          <LockedWrapper
            onClick={() => setToggleNav(!toggleNav)}
            animationComplete={animationComplete}
          >
            <Hamburger />
          </LockedWrapper>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
