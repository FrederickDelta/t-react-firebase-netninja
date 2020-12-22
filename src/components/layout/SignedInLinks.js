import {NavLink} from "react-router-dom"

const SignedInLinks = () => {
  return (
    <div className="navbar-end">
      <NavLink to="/" className="navbar-item">New Project</NavLink>
      <NavLink to="/" className="navbar-item">Log Out</NavLink>
      <NavLink to="/" className="navbar-item">
        <button class="button has-background-white" style={{"border-radius": "50%"}}>N</button>
      </NavLink>
    </div>
  )
}

export default SignedInLinks;