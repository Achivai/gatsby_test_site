// Step 1: Import React
import * as React from 'react'

import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
    </main>
  )
}

export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  ) // adds meta-data

// Step 3: Export your component
export default AboutPage