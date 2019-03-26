import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import History from '../History/History'
import Contact from '../Contact/Contact'


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className="subnav_links" >
            <h3>About</h3>
          </Link>
          <Link to='/about/history' className="subnav_links" >
            <h3>History</h3>
          </Link>
          <Link to='/about/contact' className="subnav_links" >
            <h3>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route component={History} path='/about/history'></Route>
            <Route component={Contact} path='/about/contact'></Route>
            <Route exact path='/about'
              render={() => (
                <div>
                  <h1>About the University</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor culpa mollitia, harum animi eius suscipit non perferendis aperiam iure atque, modi ea asperiores odio reiciendis accusantium molestias, omnis vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor culpa mollitia, harum animi eius suscipit non perferendis aperiam iure atque, modi ea asperiores odio reiciendis accusantium molestias, omnis vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor culpa mollitia, harum animi eius suscipit non perferendis aperiam iure atque, modi ea asperiores odio reiciendis accusantium molestias, omnis vitae. </p>
                </div>
              )}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}