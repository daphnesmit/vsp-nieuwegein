import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { RecentPostByIdQuery } from 'types/graphql-types'

import BaseLayout from '@/components/BaseLayout'
import { HTMLContent } from '@/components/Content'
import { RecentPostTemplate } from '@/components/templates/RecentPostTemplate'

interface RecentPostProps {
  data: RecentPostByIdQuery
}

const RecentPost: React.FC<RecentPostProps> = ({ data }) => {
  const { markdownRemark: post } = data

  if (!post?.frontmatter?.title) return null
  return (
    <BaseLayout>
      <RecentPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </BaseLayout>
  )
}

export default RecentPost

export const pageQuery = graphql`
  query RecentPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
