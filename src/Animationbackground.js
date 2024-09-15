import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animation from './Animation'; // Ensure the correct path to your animation file

const AppWithAnimationBackground = () => {
  return (
    <View style={styles.container}>
      <Animation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    backgroundColor: 'transparent', // Transparent AppBar to show animation behind it
    elevation: 0, // Remove AppBar shadow
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: '#fff',
  },
});

export default AppWithAnimationBackground;
