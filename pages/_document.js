import Document, { Html, Head, Main, NextScript } from 'next/document'
import AuthProvider from '../context/authProvider'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (

      <Html>
         <Head>
         <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" /> 
         <link rel="icon" href="/broom.png" />
     </Head>
        <body>
          <AuthProvider>
          <Main />
          <NextScript />
          </AuthProvider>
        </body>
      </Html>
    )
  }
}

export default MyDocument