import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class DeckItem extends Component {
  render() {
    const { deck , navigation } = this.props ;
    const questionsCount = deck.questions ? deck.questions.length : 0;
    return(
      <TouchableOpacity onPress={() => { navigation.navigate('Deck Page', {deck:{...deck}})}}>
        <Text>{ deck?.title }</Text>
        <Text>{ questionsCount } Cards </Text>
      </TouchableOpacity>
    )
  }
}
export default DeckItem
