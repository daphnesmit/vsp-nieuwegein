import React from 'react'
import styled from 'styled-components'
import Hero from '../Hero'
import Usps from '../Usps'
import { IconOption } from '../Icon/Icon'
import Sections from '../Sections'

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

  const usps = [
    {
      title: 'Duurzaamheid, Luchtkwaliteit, Groen en Geluid',
      description:
        'Aandacht voor o.a. klimaatadaptatie, het klimaatakkoord van Parijs, verminderen van geluid, CO2-uitstoot, (giftige) fossiele brandstoffen, fijn stof en stikstofdioxide worden ook op plaatselijk niveau steeds belangrijker.',
      icon: 'Speech' as IconOption,
      viewBox: '0 0 48 48'
    },
    {
      title: 'De VSP & Stad op orde',
      description:
        'Nieuwegein moet een groene stad blijven met veel voorzieningen. Er wordt niet gebouwd in parken.',
      icon: 'Conference' as IconOption,
      viewBox: '0 0 256 241'
    },
    {
      title: 'Armoede Bestrijding',
      description:
        'Extra financiële ondersteuning voor senioren en kwetsbare emigranten',
      icon: 'Phone' as IconOption,
    },
    // {
    //   alt: 'Stem VSP Lijst 7',
    //   img: '/img/stem-vsp-lijst-7.jpeg'
    // },
  ]
  return (
    <>
      <Hero />
      <Usps usps={usps} mt={-15} />
      <Sections.SectionGridList />
      {/* <Container
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
    </Container> */}
    </>
  )
}
