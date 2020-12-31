import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';
import './components/style/main.css'
import Breeds from './components/Breeds';
import Lists from './components/Lists';
import Talk from './components/Talk';
import Care from './components/Care';
import Blog from './components/Blog';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Account from './components/Account';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/breeds" exact component={Breeds} />
      <Route path="/lists" exact component={Lists} />
      <Route path="/talk" exact component={Talk} />
      <Route path="/care" exact component={Care} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/account" exact component={Account} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  )
};

export default App;