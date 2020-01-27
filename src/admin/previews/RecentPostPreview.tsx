import React from 'react'
import { RecentPostTemplate } from '../../templates/recent-post'

export interface RecentPostPreviewProps {
  entry: {
    getIn: (props: any) => any
  }
  widgetFor: (props: any) => any
}

const RecentPostPreview: React.FC<RecentPostPreviewProps> = ({ entry, widgetFor }) => {
  return (
    <RecentPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}


export default RecentPostPreview