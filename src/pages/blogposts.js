import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>{"blogpost list here?"}</h1>
    <p>{"can't wait to see what happens"}</p>
    <Link to="/">{"Take me home!"}</Link>
  </Layout>
)

export default SecondPage
