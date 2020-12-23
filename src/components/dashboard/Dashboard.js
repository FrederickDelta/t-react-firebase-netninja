import {Component} from "react"
import ProjectList from "../projects/ProjectList"
import Notifications from "./Notifications"
class Dashboard extends Component {
  render () {
    return (
      <div className="dashboard section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <ProjectList />
            </div>
            <div className="column is-8">
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard