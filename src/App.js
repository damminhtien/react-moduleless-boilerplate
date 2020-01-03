import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import MainLayout from './components/layout'

const Home = Loadable({
  loader: () => import('./pages/home'),
  loading: () => null,
})
const ExampleFunction = Loadable({
  loader: () => import('./pages/exampleFunction'),
  loading: () => null,
})
const ExampleClass = Loadable({
  loader: () => import('./pages/exampleClass'),
  loading: () => null,
})
const Error404 = Loadable({
  loader: () => import('./pages/error'),
  loading: () => null,
})

function App() {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/example-func" component={ExampleFunction} />
          <Route exact path="/example-class" component={ExampleClass} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </MainLayout>
  )
}

export default App
