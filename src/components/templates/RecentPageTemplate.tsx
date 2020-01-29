import React from 'react'
import { MarkdownRemarkFrontmatter } from 'types/graphql-types'

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
