import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default HelloWorldApp;

