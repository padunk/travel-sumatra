import styled, { css } from "styled-components"
import { COLORS, BREAKPOINTS } from "../constants/constants"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 3.2rem;
  position: relative;
  width: auto;
  height: 100%;

  @media ${BREAKPOINTS.lg} {
    max-width: 960px;
  }
  @media ${BREAKPOINTS.xl} {
    max-width: 1152px;
  }
  @media ${BREAKPOINTS.xxl} {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      ${"" /* margin: 0; */}
      max-width: 100%;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
`

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 3.2rem;
  height: 3.2rem;
  background: radial-gradient(circle, rgb(245, 245, 20), rgb(240, 220, 0));
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 100ms ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 9999;

  &.hovered {
    background: transparent !important;
    width: 4rem;
    height: 4rem;
    border: 4px solid ${COLORS.red};
  }

  &.pointer {
    border: 4px solid ${COLORS.red};
  }

  &.change-theme {
    border: 4px solid ${props => props.theme.text};
  }

  &.nav-open {
    /* background: ${props => props.theme.background}; */
    background: radial-gradient(circle, rgb(20, 245, 245), rgb(0, 240, 220));
  }

  &.hovered.nav-open {
    border: 4px solid ${props => props.theme.text};
  }

  &.locked {
    background: transparent;
    width: 5rem;
    height: 5rem;
    border: 4px solid ${props => props.theme.text};
    top: ${props => props.top && props.top}px !important;
    left: ${props => props.left && props.left}px !important;
  }
`
