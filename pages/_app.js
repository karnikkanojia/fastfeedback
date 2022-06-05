import { AuthProvider } from '../lib/auth';
import '../styles/globals.css';
import { ThemeProvider } from '@chakra-ui/react';
import GlobalStyle from '../styles/GlobalStyle';
import customTheme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;