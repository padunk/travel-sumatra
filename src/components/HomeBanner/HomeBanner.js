import React from "react"
import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from "../../styles/homeStyles"
import { useWindowSize } from "../../hooks/useWindowSize"
import { useGlobalStateContext } from "../../context/globalContext"
import { COLORS } from "../../constants/constants"

const HomeBanner = () => {
  const [width, height] = useWindowSize()
  const { currentTheme } = useGlobalStateContext()
  let canvas = React.useRef(null)
  const radius = 45

  React.useEffect(() => {
    let renderingElement = canvas.current
    let renderingCtx = renderingElement.getContext("2d")
    // let lastX, lastY
    let moving = false

    const handleMouseOver = ev => {
      moving = true
      // lastX = ev.pageX - renderingElement.offsetLeft
      // lastY = ev.pageY - renderingElement.offsetTop
    }

    const handleMouseUp = ev => {
      moving = false
      // lastX = ev.pageX - renderingElement.offsetLeft
      // lastY = ev.pageY - renderingElement.offsetTop
    }

    function handleMouseMove(ev) {
      if (moving) {
        var rect = this.getBoundingClientRect()
        var x = ev.clientX - rect.left
        var y = ev.clientY - rect.top

        renderingCtx.beginPath()
        renderingCtx.moveTo(x + radius, y)
        renderingCtx.arc(x, y, radius, 0, 2 * Math.PI)
        renderingCtx.fill()
      }
    }

    renderingElement.width = width
    renderingElement.height = height

    renderingCtx.fillStyle =
      currentTheme === "dark" ? COLORS.black : COLORS.white
    renderingCtx.fillRect(0, 0, width, height)
    renderingCtx.globalCompositeOperation = "destination-out"
    renderingCtx.fillStyle = "rgba(0, 0, 0, 0.7)"

    renderingElement.addEventListener("mouseover", handleMouseOver)
    renderingElement.addEventListener("mouseup", handleMouseUp)
    renderingElement.addEventListener("mousemove", handleMouseMove)

    return () => {
      renderingElement.removeEventListener("mouseover", handleMouseOver)
      renderingElement.removeEventListener("mouseup", handleMouseUp)
      renderingElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [currentTheme, width, height])

  const parentAnim = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const childAnim = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video
          src={require("../../assets/video/featured-video.mp4")}
          loop
          autoPlay
          muted
          width={width}
          height={height}
        />
      </Video>
      <Canvas ref={canvas} />
      <BannerTitle variants={parentAnim} initial="initial" animate="animate">
        <Headline variants={childAnim}>TRAVEL</Headline>
        <Headline variants={childAnim}>SUMATRA</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
