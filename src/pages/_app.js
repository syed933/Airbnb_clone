import '@/styles/globals.css'
import '../styles/globals.css'
import Router from 'next/router'

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className:'z-50',
  delay: 100,
});

// When user goes to another page or is redirected to another page, thats when we start up the progress bar
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

