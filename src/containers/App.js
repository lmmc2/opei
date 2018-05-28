import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Footer from './../components/Footer';
import Notice from './Notice';
import Practice from './Practice';
import PracticeC from './PracticeC';
import FAQ from './FAQ';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/motivacao' component={About}/>
            <Route exact path='/regulamento' component={Notice}/>
            <Route exact path='/pratique-teorica' component={Practice}/>
            <Route exact path='/pratique-pratica' component={PracticeC}/>
            <Route exact path='/faq' component={FAQ}/>
          </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}
