import React from 'react'
import { graphql } from 'gatsby'

import BaseLayout from '../components/BaseLayout'

interface Post {
  title: string
  date: string
  templateKey: string
}

interface RecentPageTemplateProps {
  title: string
  posts: Post[]
}

export const RecentPageTemplate: React.FC<RecentPageTemplateProps> = ({ title, posts }) => {
  return (
    <div style={{ backgroundColor: 'orange', padding: 10 }}>
      <h1>{title}</h1>
      {posts.map(post => (
        <div style={{ width: '25%', backgroundColor: 'blue', padding: 10 }}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  )
}

interface RecentPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        image: any
      }
    }
    allMarkdownRemark: {
      edges: any[]
    }
  }
}

const RecentPage: React.FC<RecentPageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { edges } = data.allMarkdownRemark
  const posts = edges
    .filter(
      edge => !!edge.node.frontmatter.date && edge.node.frontmatter.templateKey === 'recent-post',
    )
    .map(edge => edge.node.frontmatter)
  return (
    <BaseLayout>
      <RecentPageTemplate title={frontmatter.title} posts={posts} />
    </BaseLayout>
  )
}

export default RecentPage

export const pageQuery = graphql`
  query RecentPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "recent-page" } }) {
      frontmatter {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            templateKey
          }
        }
      }
    }
  }
`
