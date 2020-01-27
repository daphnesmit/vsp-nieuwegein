import React from 'react'

import BaseLayout from '../components/BaseLayout'

const NotFoundPage: React.FC = () => {
  return (
    <BaseLayout title="404: Not Found">
      <h1>Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </BaseLayout>
  )
}

export default NotFoundPage
