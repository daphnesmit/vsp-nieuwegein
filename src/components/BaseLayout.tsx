import React from 'react'
import { createGlobalStyle } from "styled-components"
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import Seo from './Seo'

interface BaseLayoutProps {
  title?: string
}

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
  `

const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <div>
      <Seo title={title} />
      <GlobalStyle theme="purple" />
      {/* <Navbar /> */}
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default BaseLayout
