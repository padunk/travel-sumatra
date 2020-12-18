import React from "react"
import { Container, Flex } from "../../styles/globalStyles"
import {
  Nav,
  NavHeader,
  NavList,
  NavFooter,
  NavVideos,
} from "../../styles/navStyles"
import { motion, AnimatePresence } from "framer-motion"
import { customEase } from "../../constants/constants"
import FooterContents from "../FooterContents/FooterContents"
import { Logo } from "../../styles/headerStyles"
import Link from "../Link/Link"
import { LockedWrapper } from "../LockedWrapper/LockedWrapper"
import { Hamburger } from "../Hamburger/Hamburger"

const navRoutes = [
  {
    id: 0,
    title: "not humble",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "bleeping easy",
    path: "/bleeping-easy",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "it takes an island",
    path: "/island",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 4,
    title: "50 beaches",
    path: "/50-beaches",
    video: "50-beaches.mp4",
  },
]

const Navigation = ({ toggleNav, setToggleNav }) => {
  const [revealVideo, setRevealVideo] = React.useState({
    show: false,
    video: "featured-video.mp4",
    key: 0,
  })

  return (
    <AnimatePresence>
      {toggleNav && (
        <Nav
          initial={{ x: "-100%" }}
          exit={{ x: "-100%" }}
          animate={{
            x: toggleNav ? 0 : "-100%",
            transition: {
              duration: 0.8,
              ease: customEase,
            },
          }}
        >
          <Container fluid>
            <NavHeader>
              <Flex spaceBetween noHeight>
                <Logo>
                  <Link to="/" cursor="pointer">
                    TRAVEL SUMATRA
                  </Link>
                </Logo>
                <LockedWrapper onClick={() => setToggleNav(!toggleNav)}>
                  <Hamburger closed={true} />
                </LockedWrapper>
              </Flex>
            </NavHeader>
            <NavList>
              <ul>
                {navRoutes.map(route => {
                  return (
                    <motion.li
                      onHoverStart={() =>
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      key={route.id}
                    >
                      <Link to={`projects/${route.path}`} cursor="pointer">
                        <motion.div
                          className="link"
                          initial={{ x: -108 }}
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: customEase,
                            },
                          }}
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </NavList>
            <NavFooter>
              <FooterContents />
            </NavFooter>
            <NavVideos>
              <motion.div
                animate={{ width: revealVideo.show ? 0 : "100%" }}
                className="reveal"
              ></motion.div>
              <div className="video">
                <AnimatePresence initial={false} exitBeforeEnter>
                  <motion.video
                    key={revealVideo.key}
                    src={require(`../../assets/video/${revealVideo.video}`)}
                    autoPlay
                    loop
                    muted
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                  />
                </AnimatePresence>
              </div>
            </NavVideos>
          </Container>
        </Nav>
      )}
    </AnimatePresence>
  )
}

export default Navigation
