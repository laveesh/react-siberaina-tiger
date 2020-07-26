import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer } from './Components';
import { Home, About, Product } from './Views';

function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>
        <Header />

        <div className='p-3'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/products/:id'>
              <Product />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
