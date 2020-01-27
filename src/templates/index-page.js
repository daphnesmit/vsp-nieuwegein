import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import BaseLayout from "../components/BaseLayout"

export const HomePageTemplate = ({ title, image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <h1
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          boxShadow:
            "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
          color: "white",
          height: "100vh",
          padding: "0.25em",
        }}
      >
        {title}
      </h1>
    </div>
  )
}
HomePageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <BaseLayout>
      <HomePageTemplate title={frontmatter.title} image={frontmatter.image} />
    </BaseLayout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
