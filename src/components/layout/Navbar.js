import {Link} from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignOutLinks from "./SignedOutLinks"

const Navbar = () => {
  return (
    <nav className="navbar has-background-primary">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">MarioPlan</Link>
        </div>
        <div className="navbar-menu">
          <SignOutLinks /> 
          <SignedInLinks />  
        </div>
      </div>
    </nav>
  )
}

export default Navbar;