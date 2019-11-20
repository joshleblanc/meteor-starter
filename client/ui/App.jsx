import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './Layout';
import {ThemeProvider} from "@material-ui/styles";
import theme from "./lib/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import {SnackbarProvider} from "notistack";

export default () => {
  return(
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline/>
        <BrowserRouter>
          <Layout/>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  )
};
