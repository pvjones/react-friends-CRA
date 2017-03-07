import React, { Component } from 'react';
import Friend from './Friend';
import friends from './friends';

import './App.css';

class FriendsList extends Component {

  constructor(props) {
      super(props);
      this.state = {
        searchText: "",
        orderBy: "name",
        order: "ascending"
      };
    }
  
  handleChange(field, event) {
    this.setState( { [field]: event.target.value } );
  }

  render() {

    const friendsList = friends
      .filter( elem => {
        return elem.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1;
      })
      .sort( (elem1, elem2) => {
        return elem1[this.state.orderBy] > elem2[this.state.orderBy]
      })
      .map( elem => {
        return <Friend 
                  currentLocation={ elem.current_location || {} }
                  friendCount={ elem.friend_count }
                  key={ elem.$$hashKey }
                  name={ elem.name }
                  pictureUrl={ elem.pic_square }
                  status={ elem.status ? elem.status.message : "" }
                />
      });

      const displayFriends = (this.state.order === "ascending") ? friendsList : friendsList.slice().reverse();

    return (
      <div>
        <form className="form-inline searchForm" role="form">
          <div className="form-group">

            <input className="form-group" placeholder="Search For Friends" value={ this.state.searchText } onChange={ this.handleChange.bind(this, "searchText") }/>
            <select className="input-medium" value={ this.state.orderBy } onChange={ this.handleChange.bind(this, "orderBy") }>
                <option>Name</option>
                <option>#Friends</option>
            </select>

            <select className="input-medium" value={ this.state.order } onChange={ this.handleChange.bind(this, "order") } >
                <option>Descending</option>
                <option>Ascending</option>
            </select>

          </div>
        </form>

        <ul>
          { displayFriends }
        </ul>
      </div>
    )
  }
}

export default FriendsList;