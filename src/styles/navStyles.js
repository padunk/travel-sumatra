import styled from "styled-components"
import { motion } from "framer-motion"
import { COLORS } from "../constants/constants"

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${COLORS.red};
  color: ${COLORS.black};
  z-index: 1000;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 7.2rem;
  position: relative;

  h2 {
    color: ${props => props.theme.background};
  }
`

export const NavList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;

    li {
      list-style-type: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      overflow: hidden;

      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;

        .arrow {
          height: 7.6rem;
          margin-right: 8px;

          svg {
            width: 10rem;

            path {
              fill: ${props => props.theme.background};
            }
          }
        }
      }
    }
  }
`

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: ${COLORS.black};

  .reveal {
    width: 100%;
    background: ${COLORS.red};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .video {
    background: ${COLORS.black};
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 4.5rem;

  p {
    color: ${props => props.theme.background};
  }

  svg path {
    fill: ${props => props.theme.background};
  }
`
