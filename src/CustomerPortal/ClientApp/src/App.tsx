import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './custom.css'

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import { FetchUsers } from './repository/User.Repository';

// function App() {
//   return (
//   <Router>
//     <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={"/sign-in"}>aerfin</Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-in"}>Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/users"}>User Data</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <Switch>
//             <Route exact path='/' component={Login} />
//             <Route path="/sign-in" component={Login} />
//             <Route path="/sign-up" component={SignUp} />
//           </Switch>
//         </div>
//       </div>
//           <Layout>
//             <Route exact path='/' component={Home} />
//             <Route path='/counter' component={Counter} />
//             <Route path='/users' component={FetchUsers} />
//           </Layout>
//     </div>
//     </Router>
//   );
// }
// export default App;

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div >
    
      <Switch>
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/users' component={FetchUsers} />
      </Layout>
      </div>
    );
  }
}
