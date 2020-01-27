import React from 'react'
import PropTypes from 'prop-types'
import { RecentPostTemplate } from '../../templates/recent-post'

const RecentPostPreview = ({ entry, widgetFor }) => {
  return (
    <RecentPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

RecentPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RecentPostPreview
