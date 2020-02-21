import { css } from 'styled-components'

export const html = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${({ theme }) => theme.fontSizes.root};
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.body.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.8;
    min-width: 320px;
  }
`
