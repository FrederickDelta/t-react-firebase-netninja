import {NavLink} from "react-router-dom"

const SignedInLinks = () => {
  return (
    <div className="navbar-end">
      <NavLink to="/" className="navbar-item">New Project</NavLink>
      <NavLink to="/" className="navbar-item">Log Out</NavLink>
      <NavLink to="/" className="navbar-item">
        <button className="button has-background-white" style={{"borderRadius": "50%"}}>N</button>
      </NavLink>
    </div>
  )
}

export default SignedInLinks;