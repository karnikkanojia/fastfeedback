import React from 'react';
import { CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';


const GlobalStyle = ({ children }) => {
  return (
    <>
        <CSSReset />
        <Global
            styles={css`
                html {
                    scroll-behavior: smooth;
                }

                #__next {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
            `}
        />
        {children}
    </>
  );
};

export default GlobalStyle