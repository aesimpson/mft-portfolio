import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  title,
  description,
}) => (
    <section>
      <div className="container">
        <div className="index-description row align-items-center py-5">
          <div className="col-sm-12 col-lg-6">
              <h2 className="title">{description.heading}</h2>
              <h3 className="subtitle">{description.subheading}</h3>
              <p>{description.intro}</p>
              <Link to="/about">
                Learn More About Me >>
              </Link>
          </div>
          <div className="portrait col-sm-12 col-lg-6">
            <PreviewCompatibleImage imageInfo={image} />
          </div>
        </div>
      </div>
    </section>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description {
          heading
          subheading
          intro
        }
      }
    }
  }
`
