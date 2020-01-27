import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components"

import BaseLayout from '../components/BaseLayout'

interface HomePageTemplateProps {
  title: string
  image: any
}

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomePageTemplate: React.FC<HomePageTemplateProps> = ({ title, image }) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}>
      <h1
        style={{
          color: 'white',
          height: '100vh',
          padding: '0.25em',
        }}>
        {title}
      </h1>
    </Container>
  )
}

interface HomePageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        image: any
      }
    }
  }
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <BaseLayout>
      <HomePageTemplate title={frontmatter.title} image={frontmatter.image} />
    </BaseLayout>
  )
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
