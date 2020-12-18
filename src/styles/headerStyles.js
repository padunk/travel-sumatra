import styled from "styled-components"
import { COLORS } from "../constants/constants"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.header)`
  height: 0;
  width: 100%;
  position: absolute;
  top: 7.2rem;
  right: 0;
  left: 0;
  z-index: 999;
`

export const Logo = styled.div`
  a {
    font-size: 2.4rem;
    font-weight: 900;
    text-decoration: none;
    color: ${props => props.theme.text};
    font-family: "Kanit", sans-serif;
  }

  span {
    height: 1.2rem;
    width: 3.6rem;
    background-color: ${COLORS.red};
    margin: 0 4px;
    border-radius: 10px;
    display: inline-block;
    position: relative;
    bottom: 2px;
    left: 1rem;
  }
`

export const LockedDivStyles = styled.div`
  display: inline-block;
`

export const HamburgerButton = styled.button`
  transform-origin: center;
  border: none;
  background: none;
  outline: none;

  span {
    width: 3.6rem;
    height: 0.8rem;
    display: block;
    background: ${props => props.theme.text};
    margin: 8px;
  }

  .closed-hamburger--left {
    margin: 0 8px;
    transform: rotate(45deg);
    position: relative;
    top: 4px;
  }

  .closed-hamburger--right {
    margin: 0 8px;
    position: relative;
    top: -4px;
    transform: rotate(-45deg);
  }
`
