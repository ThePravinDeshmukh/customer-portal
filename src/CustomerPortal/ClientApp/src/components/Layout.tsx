import { Box, createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { grey, purple, red } from '@material-ui/core/colors';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {

    const darkTheme = createMuiTheme({
      palette: {
        primary: {
          main: red[800],
        },
        secondary: {
          main: grey[500],
        },
      }
    });

    return (
      <div>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <NavMenu />
           {this.props.children}
        </ThemeProvider>
      </div>
    );
  }
}
