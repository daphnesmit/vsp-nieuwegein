import React from 'react';
import styled from 'styled-components';

interface Props {
  lazyload?: boolean;
  alt: string;
  src: string;
  srcSet?: {
    src: string;
    width: number;
  }[];
}

const StyledPicture = styled.picture`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Img: React.FC<Props> = props => {
  const { src, srcSet, alt, lazyload } = props;
  if (!src && !srcSet) {
    return null;
  }

  return (
    <StyledPicture {...props}>
      <source
        data-srcset={
          srcSet ? srcSet.map(item => `${item.src} ${item.width}w`) : null
        }
        srcSet={
          !lazyload && srcSet
            ? srcSet.map(item => `${item.src} ${item.width}w`).toString()
            : undefined
        }
      />
      <StyledImg
        data-sizes="auto"
        className={lazyload ? 'lazyload' : ''}
        data-src={lazyload ? src : null}
        src={
          lazyload
            ? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
            : src
        }
        alt={alt}
      />
      <noscript>
        <StyledImg src={src} alt={alt} />
      </noscript>
    </StyledPicture>
  );
};

export default Img