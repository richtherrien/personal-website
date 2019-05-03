import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
// components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/pages/home';
import About from './components/pages/about';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import Skills from './components/pages/skills';
import Terms from './components/pages/terms';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/terms' component={Terms} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
