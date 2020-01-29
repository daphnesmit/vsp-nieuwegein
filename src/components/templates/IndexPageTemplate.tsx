import Button from '@material-ui/core/Button'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`

interface IndexPageTemplateProps {
  title: string
  image: any
}

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({ title, image }) => {
  if (!image) return null

  return (
    <Container
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}>
      <h1
        style={{
          color: 'white',
          height: '100vh',
          padding: '0.25em',
        }}>
        {title}
        <StyledButton>Styled Components</StyledButton>
      </h1>
    </Container>
  )
}
