import React, {Component} from 'react';
import './index.css';

class PageTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="common-title-box">
        <div className="common-title">{this.props.title}</div>
        {this.props.children}
      </div>
    )
  }
}
export default PageTitle;