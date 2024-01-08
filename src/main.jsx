import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import GlobalStyles from './components/GlobalStyles/GlobalStyles.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { CookiesProvider } from 'react-cookie'
import { ThemeProvider } from 'react-bootstrap'
import { ThemeProvider as ThemMaterial } from '@emotion/react'
import theme from './theme/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >
          <ThemMaterial theme={theme}>
            <Provider store={store}>
              <CookiesProvider defaultSetOptions={{ path: '/' }}>
                <App />
              </CookiesProvider>
            </Provider>
          </ThemMaterial>
        </ThemeProvider>
      </GlobalStyles>
    </BrowserRouter>
  </React.StrictMode>
)
