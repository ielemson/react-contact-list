import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './fontawesome/css/fontawesome.min.css'
import './App.css';
import './components/Footer.css';
import Contacts from './components/Contacts'
import Header from './components/Header'
import Footer from './components/Footer'

import { Provider } from './context'
const App = () => {
  return (

    <Provider>
      <div className="App">
        <Header branding="React Video Tutorial" />
        <br />
        <div className="container">
          <Contacts />

        </div>
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
