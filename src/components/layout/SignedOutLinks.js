import {NavLink} from "react-router-dom"

const SignedOutLinks = () => {
  return (
    <div className="navbar-end">
      <NavLink to="/" className="navbar-item">Signup</NavLink>
      <NavLink to="/" className="navbar-item">Login</NavLink>
    </div>
  )
}

export default SignedOutLinks;