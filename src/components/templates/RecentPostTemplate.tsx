import React from 'react'

import Content, { ContentProps } from '../Content'

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
