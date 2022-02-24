import '../styles/globals.css'
import AuthProvider from '../context/authProvider'
import GlobalSpinnerContextProvider from '../context/globalSpinnerContext'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalSpinnerContextProvider>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </GlobalSpinnerContextProvider>
  )
}

export default MyApp
