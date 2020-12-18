import styled from "styled-components"
import { motion } from "framer-motion"
import { COLORS } from "../constants/constants"

export const Banner = styled.div`
  background-color: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 29.6rem;
`

export const Video = styled.div`
  height: 100%;
  width: 100%;

  video {
    object-fit: cover;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
`

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -12rem;
  left: -1.8rem;
  color: ${props => props.theme.text};
  pointer-events: none;
`

export const Headline = styled(motion.span)`
  display: block;
  font-family: "Kanit", sans-serif;
  font-size: 22rem;
  font-weight: 900;
  line-height: 0.76;
`

export const HomeContentSection = styled(motion.div)`
  margin-bottom: 20rem;
`

export const Content = styled.h2`
  max-width: 64rem;
  width: 58.333%;
  font-size: 4.2rem;
  line-height: 1;
  font-weight: 400;
  margin-left: 12.4rem;
  color: ${props => props.theme.text};
`

export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 20rem;
  position: relative;

  .photo-gallery {
    margin-bottom: 20rem;
    position: relative;
    display: block;
  }
`

export const FeaturedContent = styled(motion.div)`
  height: 48rem;
  width: 100%;
  padding: 5.6rem 12.4rem;
  box-sizing: border-box;
  color: ${COLORS.white};
  font-family: "Kanit", sans-serif;

  h3 {
    font-size: 2rem;
    background: ${COLORS.white};
    display: inline-block;
    padding: 0 1rem;
  }
  .meta {
    display: flex;

    h4 {
      font-size: 1.6rem;
      &:last-child {
        margin-left: 1rem;
      }
    }
  }

  .featured-title {
    position: absolute;
    bottom: -13.8rem;

    p {
      font-size: 7rem;
      font-weight: bold;
      line-height: 1;
      text-transform: uppercase;
      margin: 0;
      color: ${props => props.theme.text};
    }

    .arrow {
      width: 12rem;
      height: 8rem;
      display: inline-block;
      position: relative;
      overflow: hidden;

      svg {
        position: absolute;
        top: 1.6rem;
        left: -4.8rem;
        width: 10.8rem;

        path {
          fill: ${props => props.theme.text};
        }
      }
    }

    .left {
      transform: rotate(180deg);
      left: -2rem;
    }
  }
`

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 48rem;
  top: 0;
  display: block;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const FeaturedProjects = styled.div`
  margin-top: 20rem;

  .all-projects {
    background: ${COLORS.red};
    color: ${props => props.theme.text};
    padding: 1rem 2rem;
    display: block;
    text-align: left;
    font-size: 2rem;
    font-family: "Kanit", sans-serif;
    line-height: 1;
    font-weight: 600;
    border: none;
    display: flex;
    align-items: center;
  }
`

// About
export const HomeAboutSection = styled(motion.div)`
  margin-bottom: 20rem;
`

export const About = styled.div`
  width: 100%;
  h2 {
    width: 60%;
    font-size: 3.2rem;
    font-weight: 400;
    margin-left: 12.4rem;
    color: ${props => props.theme.text};
  }

  p {
    max-width: 44rem;
    font-size: 2rem;
    margin-left: 12.4rem;
    line-height: 2.2rem;
    color: ${props => props.theme.text};
  }
`

export const Services = styled.div`
  color: ${props => props.theme.text};
  font-size: 1.8rem;
`

// Accordion
export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${COLORS.red};
  height: 3.2rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.6rem;
  margin: 8px 0;
  text-transform: capitalize;
`

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;

  span {
    width: 16px;
    height: 4px;
    background: ${COLORS.red};
    transition: 100ms ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 4rem;

  span {
    width: 100%;
    margin: 8px 0;
    font-size: 1.4rem;
    color: ${COLORS.red};
    display: block;
    font-weight: 300;
    text-transform: capitalize;
  }
`
