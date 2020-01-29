import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import BaseLayout from '../components/BaseLayout'
import Content, { ContentProps, HTMLContent } from '../components/Content'
import { MarkdownRemark } from '@/graphqlTypes'

interface RecentPostTemplateProps {
  content?: string | null
  contentComponent?: React.FC<ContentProps>
  description?: string | null
  title: string
  helmet?: any
}

export const RecentPostTemplate: React.FC<RecentPostTemplateProps> = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section style={{ backgroundColor: 'orange', padding: 10 }}>
      {helmet || ''}
      <div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {content && <PostContent content={content} />}
      </div>
    </section>
  )
}

interface RecentPostProps {
  data: {
    markdownRemark: MarkdownRemark
  }
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
