import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function UserProfile(props) {
  return (
    <div>
      <h1>User Profile For: {props.match.params.userId}</h1>
    </div>
  )
}

function BrowseUsers() {
  return (
    <div>
      <h1>Browse Users</h1>
      <div>
        <Link to="/users/1">Nathan</Link>
      </div>
      <div>
        <Link to="/users/2">Ryan</Link>
      </div>
    </div>
  )
}

function Home() {
  return <h1>Home Page</h1>
}

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="/users">Users</Link>
      </nav>
      <hr />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={BrowseUsers} />
        <Route path="/users/:userId" component={UserProfile} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
