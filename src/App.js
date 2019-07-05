import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/styles/App.css';
import './components/styles/Footer.css'
import Contacts from './components/contacts/Contacts'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import AddContact from './components/contacts/AddContacts'

import { Provider } from './context'
const App = () => {
  return (

    <Provider>
      <div className="App">
        <Header branding="React Video Tutorial" />
        <br />
        <div className="container">
          <AddContact />
          <br />
          <br />
          <Contacts />

        </div>

        <Footer />
      </div>
    </Provider>

  );
}

export default App;
