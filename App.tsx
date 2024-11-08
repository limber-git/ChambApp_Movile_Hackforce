import * as React from 'react';
import 'react-native-gesture-handler';

import { Navigation } from './src/Navigation';
import { DataContextProvider } from './src/app/Context';
import axios from 'axios';
 
axios.defaults.baseURL = 'https://games.cba.org.bo/api/'; 
//axios.defaults.baseURL = 'http://192.168.0.19:3001/appi/';

const App = () => {
  return (
    <DataContextProvider>
      <Navigation />
    </DataContextProvider>
  );
};

export default App;