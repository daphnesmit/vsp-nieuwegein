import { graphql } from 'gatsby'
import React from 'react'
import { RecentPageTemplateQuery } from 'types/graphql-types'

import BaseLayout from '@/components/BaseLayout'
import { RecentPageTemplate } from '@/components/templates/RecentPageTemplate'

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
