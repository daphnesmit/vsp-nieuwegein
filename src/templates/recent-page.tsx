import React from 'react'
import { graphql } from 'gatsby'

import BaseLayout from '../components/BaseLayout'
import { RecentPageTemplateQuery, MarkdownRemarkFrontmatter } from 'types/graphql-types'

interface Post extends MarkdownRemarkFrontmatter {
  slug: string
}

interface RecentPageTemplateProps {
  title: string
  posts: Post[]
}

export const RecentPageTemplate: React.FC<RecentPageTemplateProps> = ({ posts, title }) => {
  return (
    <div style={{ color: 'white', backgroundColor: 'orange', padding: 10 }}>
      <h1>{title}</h1>
      {posts.map((post, i) => (
        <a key={i} href={post.slug} style={{ width: '25%', backgroundColor: 'blue', padding: 10 }}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
        </a>
      ))}
    </div>
  )
}

interface RecentPageProps {
  data: RecentPageTemplateQuery
}

const RecentPage: React.FC<RecentPageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark!
  const { edges } = data.allMarkdownRemark
  const posts = edges
    .map(edge => ({
      ...{ ...(edge.node.frontmatter || {}) },
      slug: edge.node.fields?.slug || '',
    }))
    .filter(post => post && post.slug && post.date && post.templateKey === 'recent-post')

  if (!frontmatter?.title) return null
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "recent-post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
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
