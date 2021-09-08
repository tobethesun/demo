import './App.css';
import React,{ Component } from 'react'
import Login from './component/login'
import Person from './component/person'
import Home from './component/home'
import Publish from './component/publish'
import Sort from './component/sort'
import Audit from './component/audit'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Content from './component/content';
import List from './component/list';


class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/person/:name' exact component={Person}></Route>
          <Route path='/publish' exact component={Publish}></Route>
          <Route path='/sort' exact component={Sort}></Route>
          <Route path='/audit' exact component={Audit}></Route>
          <Route path='/video/:name' exact component={Content}></Route>
          <Route path='/list' exact component={List}></Route>
        </Router>
      </div>
    )
  }
}
export default App;
