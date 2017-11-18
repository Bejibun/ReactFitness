import React from 'react';
import { StyleSheet, Text, View, Slider, Platform, Switch, TextInput, StatusBar, KeyboardAvoidingView, Image  } from 'react-native';
import AddEntry from './components/AddEntry'
import History from './components/History'
import { TabNavigator,StackNavigator, DrawerNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'

function UdaciStatusBar ({backgroundColor, ...props}) {
 return (
   <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
     <StatusBar translucent backgroundColor={backgroundColor} {...props} />
   </View>
 )
}

const Home = ({ navigation }) => (
  <View>
    <Text>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Text>Press here for the Dashboard</Text>
    </TouchableOpacity>
  </View>
);

//Drawer Navigator
// const Home = ({ navigation }) => (
//   <View>
//     <Text>This is the Home view</Text>
//     <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
//       <Text>Press here to open the drawer!</Text>
//     </TouchableOpacity>
//   </View>
// );
//
// const Dashboard = ({ navigation }) => (
//   <View>
//     <Text>This is the Dashboard view</Text>
//     <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
//       <Text>Press here to open the drawer!</Text>
//     </TouchableOpacity>
//   </View>
// );

const Drawer = DrawerNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: Dashboard
  }
});

const Dashboard = () => (
  <View>
    <Text>This is the Dashboard</Text>
  </View>
);

const MainNavigator = StackNavigator({
   Home: {
     screen: Tabs,
   },
   EntryDetail: {
     screen: EntryDetail,
     navigationOptions: {
       headerTintColor: white,
       headerStyle: {
         backgroundColor: purple,
       }
     }
   }
 })

const Stack = StackNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: Dashboard
  }
})

 const Tabs = TabNavigator({
   History: {
     screen: History,
     navigationOptions: {
       tabBarLabel: 'History',
       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
     },
   },
   AddEntry: {
     screen: AddEntry,
     navigationOptions: {
       tabBarLabel: 'Add Entry',
       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
     },
   },
 }, {
   navigationOptions: {
     header: null
   },
   tabBarOptions: {
     activeTintColor: Platform.OS === 'ios' ? purple : white,
     style: {
       height: 56,
       backgroundColor: Platform.OS === 'ios' ? white : purple,
       shadowColor: 'rgba(0, 0, 0, 0.24)',
       shadowOffset: {
         width: 0,
         height: 3
       },
       shadowRadius: 6,
       shadowOpacity: 1
     }
   }
 })

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
            <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
            <Tabs />
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
