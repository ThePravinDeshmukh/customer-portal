import axios from 'axios';
import React, { Component } from 'react';
import { IProps } from '../datasources/IProps';
import { IUser } from '../datasources/IUser';


interface IUserState {
  users: IUser[]
  loading: boolean;
  errorMessage: string;
}

export class FetchUsers extends Component<IProps, IUserState> {
  static displayName = FetchUsers.name;

  constructor(props: IProps) {
    super(props);
    this.state = { users: [], loading: true, errorMessage: "" };
  }

  componentDidMount() {
    this.populateUserData();
  }

  static renderUsersTable(users: IUser[]) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.emailAddress}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchUsers.renderUsersTable(this.state.users);

    return (
      <div>
        <h1 id="tabelLabel" >Users</h1>
        {contents}
      </div>
    );
  }

  async populateUserData() {
    
    // const response = await fetch('api/user/all');
    // const data = await response.json();
    // this.setState({ users: data, loading: false, errorMessage: "" });

    const headers = {
      'token': getUser().token
    };

    axios.get('api/user/all', { headers })
    .then(response => {
      debugger
      this.setState({ users: response.data, loading: false });
    })
    .catch(error => {
      debugger
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
    });


  }
  
}

function getUser() {
  var user: IUser = JSON.parse(localStorage.getItem('user')?? "");
  return user;
}