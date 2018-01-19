import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import '../styles/styles.scss'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Wood burning portfolio of Mercedez Manges' },
        { name: 'keywords', content: 'wood burning, art, creativity, pyrographics' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

// GraphQL query of gatsby-config.js siteMetadata
export const query = graphql`
  query LayoutQuery {
    site {
    siteMetadata {
      title
      byline
    }
  }
  }
`