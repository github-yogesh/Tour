import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Nabvar from './components/nabvar'
import Login from './components/login'
import Signup from './components/signup'
import AddDetails from './components/addDetails'
import Home from './components/home'
import Logout from './components/logout'
import Error from './components/error'
const Routing = () =>{

  return(
    <Switch>
  <Route exact path="/">
      <Home></Home>
    </Route>

    <Route exact path="/login">
      <Login></Login>
    </Route>

    <Route exact path="/signup">
    <Signup></Signup>
    </Route>

    <Route exact path="/addDetail">
     <AddDetails></AddDetails>
    </Route>

    <Route exact path="/logout">
     <Logout></Logout>
    </Route>

    <Route>
    <Error/>
  </Route>
  </Switch>
  )

}
const App = () => {

  return (
    
    <>
   
      <Nabvar></Nabvar>
      <Routing></Routing>
   
     
    </>
  )
}

export default App
