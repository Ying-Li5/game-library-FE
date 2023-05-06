// insert routing here
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import Nav from './components/Nav/Nav'
import Login from './components/LoginPage/Login'
import User from './components/UserPage/User'
import Main from './components/MainPage/Main'
import GameDisplay from './components/GameDisplay/GameDisplay'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Switch>
          <Route path='/game/:game_id' component={ GameDisplay } strict />
          <Route path='/login' component={ Login }/>
          <Route path='/user' component={ User } strict />
          <Route path='/' component= { Main } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}