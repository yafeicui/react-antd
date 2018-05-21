import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';

class ProHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  logout = () => {
    this.props.history.push('/home');
  }
  render() {
    return (
      <div className="header-box">
        <div className="logout-button" onClick={this.logout}>退出</div>
      </div>
    )
  }
}
export default withRouter(ProHeader);