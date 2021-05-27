
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
import { setLocalNotification } from './utils/helpers'


const StackNavigator = createStackNavigator();
const StackNavigator2 = createStackNavigator();
const Tab = createBottomTabNavigator();

function DeckStackScreen() {
  return (

    <StackNavigator.Navigator>


      <StackNavigator.Screen name="Decks" component={Home} />
      <StackNavigator.Screen name="Deck Page" component={DeckPage} />
      <StackNavigator.Screen name="Add Card" component={AddNewCard} />
      <StackNavigator.Screen name="Add Quiz" component={Quiz} />

    
    </StackNavigator.Navigator>

  );
}


function StackNavigator2Screen() {
  return (

    <StackNavigator2.Navigator>

      <StackNavigator2.Screen name="Settings" component={AddNewDeck} />

    </StackNavigator2.Navigator>
  );
}


export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }
  render(){
    return (
      <Provider store={createStore(reducer)}>

        <NavigationContainer>
          <Tab.Navigator>

            <Tab.Screen name="Decks" component={DeckStackScreen} />
            <Tab.Screen name="Add Deck" component={StackNavigator2Screen} />
            
          </Tab.Navigator>

        </NavigationContainer>
      </Provider>
    )
  }

}
