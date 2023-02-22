import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Research Consultant</title>
        <meta property="og:title" content="Senior Research Consultant" />
      </Helmet>
    </div>
  )
}

export default Home
