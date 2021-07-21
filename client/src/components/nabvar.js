import React  from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nabvar = () => {

  const myState = useSelector((state)=> state.LoginNavbar)

  const Rendermenu = () =>{
    if(myState === "login"){

      return(
        <>
         
        <li className="nav-item">
          <NavLink className="nav-link" to="/addDetail">Add Detail</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link " to="/logout">Logout</NavLink>
        </li>
        </>
      )
    }else if(myState === "logout"){
      return(
          <>
        <li className="nav-item active">
          <NavLink  className="nav-link" to="/signup">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
          </>
      )
    }else{
      return(<>
           <li className="nav-item active">
          <NavLink  className="nav-link" to="/signup">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
      </>)
    }
   
  }
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<NavLink className="navbar-brand" to="/">Home</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ms-auto">
      <Rendermenu></Rendermenu>
    </ul>
  </div>
</nav>
        </>
    )
}

export default Nabvar
