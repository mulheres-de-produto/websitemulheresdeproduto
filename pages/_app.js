import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Mulheres de Produto</title>
          <meta name="description" content="Vamos abrir as portas para mais mulheres na área de Produto e Tecnologia, trocando experiências, mentoria e mostrando caminhos de transição de carreira." />

          <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon_io/site.webmanifest"></link>
      </Head>
      <Component {...pageProps} />
      {console.log({pageProps})}
    </>
  )

}

export default MyApp
