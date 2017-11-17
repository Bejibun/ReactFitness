import React from 'react';
import { StyleSheet, Text, View, Slider, Switch, TextInput, KeyboardAvoidingView, Image  } from 'react-native';
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  state = {
    input: @"fransraharja",
    showInput: false,
  }

handleToggleSwitch = () => {
  this.setState((state) =>  ({
    showInput: !state.showInput,
  }))
}

handleTextChange = (input) => {
  this.setState(() => {
    input
  })
}

  render() {
    const { input, showInput } = this.state
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <View style={{flex: 1}}>
        </View>
      </Provider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
