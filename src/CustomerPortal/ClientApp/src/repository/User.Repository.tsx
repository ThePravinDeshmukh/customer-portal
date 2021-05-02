import React, { Component } from 'react';
import { IProps } from '../datasources/IProps';
import { IUser } from '../datasources/IUsers';


interface IUserState {
  users: IUser[]
  loading: boolean;
}

export class FetchUsers extends Component<IProps, IUserState> {
  static displayName = FetchUsers.name;

  constructor(props: IProps) {
    super(props);
    this.state = { users: [], loading: true };
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
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.emailAddress}</td>
              <td>{user.userType}</td>
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
    const response = await fetch('api/user');
    const data = await response.json();
    this.setState({ users: data, loading: false });
  }
}
