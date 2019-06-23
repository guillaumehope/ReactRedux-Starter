import React, { Component } from 'react';

export default class user_list extends Component {
  render() {
    return (
      <div>
        <ul className="col-mod-4">
          {this.props.users.mapm(user => {
            return (
              <li className="list-group-item" key={user.id}>
                {user.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
