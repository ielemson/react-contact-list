import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/styles/App.css';
import './components/styles/Footer.css'
import Contacts from './components/contacts/Contacts'
import Header from './components/layouts/Header'
import About from './components/pages/About'
import Footer from './components/layouts/Footer'
import AddContact from './components/contacts/AddContacts'

import { Provider } from './context'
const App = () => {
  return (

    <Provider>
      <Router>
        <div className="App">
          <Header branding="React Video Tutorial" />
          <br />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact/add' component={AddContact} />
            </Switch>

          </div>

          <Footer />
        </div></Router>

    </Provider>

  );
}

export default App;
