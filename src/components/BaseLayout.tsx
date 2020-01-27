import React from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import Seo from './Seo'

interface BaseLayoutProps {
  title?: string
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <div>
      <Seo title={title} />
      {/* <Navbar /> */}
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default BaseLayout
