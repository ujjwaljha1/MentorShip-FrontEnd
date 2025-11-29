


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './AuthContext'; // Adjust path as needed
import './index.css';
import { NextUIProvider } from '@nextui-org/react';

import { ChakraProvider } from '@chakra-ui/react'
<<<<<<< HEAD

ReactDOM.render(
  <BrowserRouter>
=======
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="860946075972-h9p02v2019ad2n7rfco6dkil6resstqk.apps.googleusercontent.com">
>>>>>>> upstream/main
  <ChakraProvider>
    <NextUIProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NextUIProvider>
  </ChakraProvider>
<<<<<<< HEAD
=======
  </GoogleOAuthProvider>
>>>>>>> upstream/main
  </BrowserRouter>,
  document.getElementById('root')
);
