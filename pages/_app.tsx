import type { AppProps } from "next/app";
import { Layout } from "../components";
import { GlobalStyle, Normalize, Reset } from "../styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <Reset />
      <GlobalStyle />
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
