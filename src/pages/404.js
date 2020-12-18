import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/Link/Link"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
    <Link to="/" cursor="pointer">
      Back to home
    </Link>
  </Layout>
)

export default NotFoundPage
