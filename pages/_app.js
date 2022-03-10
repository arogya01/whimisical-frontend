import '../styles/globals.css'
import AuthProvider from '../context/authProvider'
import GlobalSpinnerContextProvider from '../context/globalSpinnerContext'
import PopupDialogContextProvider from '../context/popupDialogContext'
function MyApp({ Component, pageProps }) {
  return (
    <PopupDialogContextProvider>
    <GlobalSpinnerContextProvider>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </GlobalSpinnerContextProvider>
    </PopupDialogContextProvider>
  )
}

export default MyApp
