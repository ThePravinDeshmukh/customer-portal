import { Box, createMuiTheme, createStyles, CssBaseline, Grid, makeStyles, Theme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { grey, purple, red } from '@material-ui/core/colors';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    },
  }),
);

export default function Layout(props: any) {
  
  const darkTheme = createMuiTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    props: {
      MuiButton: {
        size: 'small',
      },
      MuiFilledInput: {
        margin: 'dense',
      },
      MuiFormControl: {
        margin: 'dense',
      },
      MuiFormHelperText: {
        margin: 'dense',
      },
      MuiIconButton: {
        size: 'small',
      },
      MuiInputBase: {
        margin: 'dense',
      },
      MuiInputLabel: {
        margin: 'dense',
      },
      MuiListItem: {
        dense: true,
      },
      MuiOutlinedInput: {
        margin: 'dense',
      },
      MuiFab: {
        size: 'small',
      },
      MuiTable: {
        size: 'small',
      },
      MuiTextField: {
        margin: 'dense',
      },
      MuiToolbar: {
        variant: 'dense',
      },
    },
    palette: {
      primary: {
        main: red[800],
      },
      secondary: {
        main: grey[500],
      },
    }
  });


  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <NavMenu />
        <div className={classes.paper}>
          {props.children}
        </div>
      </ThemeProvider>
    </div>
  )
}
