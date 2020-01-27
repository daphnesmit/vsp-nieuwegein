import React from 'react'
import { HomePageTemplate } from '../../templates/index-page'

export interface IndexPagePreviewProps {
  entry: {
    getIn: (props: any) => any
  }
}

const IndexPagePreview: React.FC<IndexPagePreviewProps> = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return <HomePageTemplate image={data.image} title={data.title} />
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
