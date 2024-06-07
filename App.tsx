import React from 'react';



import {Text} from 'react-native-elements';
import { MainNavigator } from './src/navegacion/MainNavigator';


function App(): JSX.Element {
  //const isDarkMode = useColorScheme() === 'dark';

  return (
    <MainNavigator/>
  );
}

export default App;
