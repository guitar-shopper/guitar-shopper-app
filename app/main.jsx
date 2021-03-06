'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import store from './store'
import Main from './components/Main'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'


/*const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    (<div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      <main>
        <Switch>
          <Route path="/jokes" component={Jokes} />
          <Redirect exact from="/" to="/jokes" />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>)
)*/

render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('main')
)
