import React from 'react'

export const HeadFontFace = () => (
  <style>
    {`
     @font-face {
        font-family: 'Neuzeit Grotesk';
        src: url('NeuzeitGro-Bla.woff2') format('woff2'),
            url('NeuzeitGro-Bla.woff') format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Neuzeit Grotesk';
        src: url('NeuzeitGro-Reg.woff2') format('woff2'),
            url('NeuzeitGro-Reg.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Neuzeit Grotesk';
        src: url('NeuzeitGro-Bol.woff2') format('woff2'),
            url('NeuzeitGro-Bol.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Neuzeit Grotesk';
        src: url('NeuzeitGro-Lig.woff2') format('woff2'),
            url('NeuzeitGro-Lig.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    
    `}
  </style>
)
