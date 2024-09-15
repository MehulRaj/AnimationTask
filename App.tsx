/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import AppWithAnimationBackground from './src/Animationbackground';


function App(): React.JSX.Element {
  return (
      <AppWithAnimationBackground />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#013208'
  },
  appBar: {// Transparent AppBar to show animation behind it
    elevation: 0, // Remove AppBar shadow
  },
  content: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    // fontSize: 18,
    // color: '#fff',
  },
});

export default App;
