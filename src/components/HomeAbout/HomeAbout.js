import React from "react"
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles"
import { motion, useAnimation } from "framer-motion"
import { customEase, COLORS } from "../../constants/constants"
import {
  useGlobalStateContext,
  useGlobalOnCursorContext,
} from "../../context/globalContext"
import { useInView } from "react-intersection-observer"

const accordionID = [
  {
    id: 0,
    title: "pacu jawi photography tour",
    results: [
      "two days at batu sangkar",
      "pacu jawi / bull race",
      "pagaruyung palace",
      "taste of padang's food",
      "bukittinggi's big ben",
    ],
  },
  {
    id: 1,
    title: "cultural tour",
    results: [
      "staying at bukittinggi and padang",
      "visiting padang old town",
      "west sumatra grand mosque",
      "bustanul arifin's museum",
      "bung hatta's house",
    ],
  },
  {
    id: 2,
    title: "new normal services",
    results: [
      "one person in one room",
      "max 3 persons in one car",
      "hand sanitizer",
      "driver with full face mask",
    ],
  },
]

const HomeAbout = () => {
  const [expanded, setExpanded] = React.useState(0)
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })

  React.useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeAboutSection
      ref={aboutRef}
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
    >
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              Travel Sumatra is an integrated, full-service tour and travel
              offering adventure travel around West Sumatra, including halal
              food tour, cultural experience and involve in traditional sports
              Pacu Jawi.
            </h2>
            <p>
              Everywhere we go, we creating a new story. Everywhere we go we
              creating a new friendship. Everywhere we go, we making history for
              future us. Create your story, bind your friendship and make a
              history worth telling with us. Now.
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordionID.map((detail, idx) => (
              <Accordion
                key={idx + detail.id}
                detail={detail}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ detail, expanded, setExpanded }) => {
  const isOpen = detail.id === expanded
  const [hovered, setHovered] = React.useState(false)
  const { currentTheme } = useGlobalStateContext()
  const onCursor = useGlobalOnCursorContext()

  const handleHovered = () => setHovered(!hovered)

  return (
    <>
      <AccordionHeader
        onClick={() => setExpanded(isOpen ? false : detail.id)}
        onHoverStart={handleHovered}
        onHoverEnd={handleHovered}
        whileHover={{
          color: currentTheme === "dark" ? COLORS.white : COLORS.black,
        }}
        onMouseEnter={() => onCursor("pointer")}
        onMouseLeave={onCursor}
      >
        <AccordionIcon>
          <motion.span
            animate={{
              rotate: isOpen || hovered ? 0 : 45,
              x: 3,
              transition: {
                duration: 0,
              },
            }}
          ></motion.span>
          <motion.span
            animate={{
              rotate: isOpen || hovered ? 0 : -45,
              x: -3,
              transition: {
                duration: 0,
              },
            }}
          ></motion.span>
        </AccordionIcon>
        {detail.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{
          height: isOpen ? "100%" : 0,
        }}
        transition={{
          duration: 0.3,
          ease: customEase,
        }}
      >
        {detail.results.map((result, idx) => (
          <span key={idx}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
