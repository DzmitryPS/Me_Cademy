import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Theme from './data/theme'
import {MyContextProvider} from './components/context/MyContext';
import ScrollToTop from './components/molecules/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <MyContextProvider>
      <BrowserRouter>
        <Theme >
          <title>MeCademy</title>
          <GlobalStyle />
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </Theme>
      </BrowserRouter>
    </MyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
