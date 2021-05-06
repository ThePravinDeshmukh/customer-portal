import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './custom.css'

//import Login from "./components/login.component";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { FetchUsers } from './repository/User.Repository';
import { IUser } from './datasources/IUser';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div >    
      <Layout>
        <Route exact path='/' component={Home} />
        <Switch>
          <PrivateRoute
              path='/dashboard'
              redirect={Login}
              component={Dashboard}
          />
          <PrivateRoute
              path='/users'
              redirect={Login}
              component={FetchUsers}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          
        </Switch>
      </Layout>
      </div>
    );
  }
}



const PrivateRoute = ({component, redirect, ...rest}: any) => {
    const routeComponent = (props: any) => (
        (localStorage.getItem('user') != undefined)
            ? React.createElement(component, props)
            : React.createElement(redirect, props)
            // <Redirect to={{pathname: '/login'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};
