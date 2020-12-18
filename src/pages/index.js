import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/HomeBanner/HomeBanner"
import HomeContent from "../components/HomeContent/HomeContent"
import HomeFeatured from "../components/HomeFeatured/HomeFeatured"
import HomeAbout from "../components/HomeAbout/HomeAbout"

const IndexPage = () => {
  const [toggleNav, setToggleNav] = React.useState(false)

  return (
    <Layout toggleNav={toggleNav} setToggleNav={setToggleNav}>
      <HomeBanner />
      <HomeContent />
      <HomeFeatured toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <HomeAbout />
    </Layout>
  )
}

export default IndexPage
