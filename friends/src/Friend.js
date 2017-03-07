import React, { Component } from 'react';

class Friend extends Component {

  render() {
    return(

      <li className="friend">
        <img className="profile-pic" src="http://placebear.com/50/50.jpg" alt="" />

        <h3>{this.props.name}</h3>

        <div className="location">
          {this.props.location}
        </div>

        <div>
          {this.props.status}
        </div>

        <div className="num-friends">
          {this.props.friendCount}
        </div>

      </li>

    )
  }
}

export default Friend