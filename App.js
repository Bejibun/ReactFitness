import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  render() {
    return (
      <View style ={styles.container}>
      <Slider
        minimumValue={-10}
        maximumValue={10}
        step={1}
        value = {this.state.value} onValueChange={(value) => this.setState(() => ({ value }))}
         />
      <Text>
        Value: {this.state.value}
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
