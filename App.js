
import React, { Component } from 'react';
import { Text, View, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home'
import AddNewDeck from './components/AddNewDeck'
import DeckPage from './components/DeckPage'
import AddNewCard from './components/AddNewCard'
import Quiz from './components/Quiz'

const HomeStack = createStackNavigator();

function DeckStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Decks" component={Home} />
      <HomeStack.Screen name="Deck Page" component={DeckPage} />
      <HomeStack.Screen name="Add Card" component={AddNewCard} />
      <HomeStack.Screen name="Add Quiz" component={Quiz} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={AddNewDeck} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends Component {

  componentDidMount() {
    // setLocalNotification()
  }
  render(){
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Decks" component={DeckStackScreen} />
            <Tab.Screen name="Add Deck" component={SettingsStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }

}
