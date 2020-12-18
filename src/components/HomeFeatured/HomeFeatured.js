import React from "react"
import { wrap } from "@popmotion/popcorn"
import { motion, AnimatePresence } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "../Link/Link"
import { Flex, Container } from "../../styles/globalStyles"
import { customEase, imageCarousel } from "../../constants/constants"
import {
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProjects,
} from "../../styles/homeStyles"
import { LockedWrapper } from "../LockedWrapper/LockedWrapper"
import { Hamburger } from "../Hamburger/Hamburger"

const HomeFeatured = ({ toggleNav, setToggleNav }) => {
  const [hovered, setHovered] = React.useState(false)
  const [animationComplete, setAnimationComplete] = React.useState(false)
  const [[page, direction], setPage] = React.useState([0, 0])
  const animation = useAnimation()
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })

  React.useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  const handleHovered = () => setHovered(!hovered)
  const variants = {
    enter: direction => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: direction => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
      }
    },
  }

  const imageIndex = wrap(0, imageCarousel.length, page)

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <HomeFeaturedSection
      ref={featuredRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: customEase,
          },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      <Container>
        <div className="photo-gallery">
          <FeaturedContent
            onHoverStart={handleHovered}
            onHoverEnd={handleHovered}
          >
            <Link to="/photo-gallery">
              <h3>Photo Gallery</h3>
            </Link>
            <Flex spaceBetween></Flex>
            <h2 className="featured-title">
              <p>{imageCarousel[imageIndex].src.split("-").join(" ")}</p>
              <span className="arrow left">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: customEase }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                  onClick={() => paginate(-1)}
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: customEase }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                  onClick={() => paginate(1)}
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={require(`../../assets/images/${imageCarousel[imageIndex].src}.jpg`)}
                alt={imageCarousel[imageIndex].src}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 200 },
                  opacity: { duration: 0.2 },
                }}
              />
            </AnimatePresence>
          </FeaturedVideo>
        </div>
      </Container>
      <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <div className="all-projects">
              <span>All Projects</span>
              <LockedWrapper
                onClick={() => setToggleNav(!toggleNav)}
                animationComplete={animationComplete}
              >
                <Hamburger />
              </LockedWrapper>
            </div>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured
