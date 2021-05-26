import React, { Component } from 'react';
import { Text, TouchableOpacity , Button } from 'react-native';
import { connect } from 'react-redux'


class DeckPage extends Component {

  render() { 
    const { title } = this.props.route.params.deck

    const {  decks ,navigation} = this.props

    const deck = decks.decks[title]
    const questionsCount = deck ? decks.decks[title].questions.length : 0;
    console.log("hii")
    console.log(decks.decks[title]);
    // //console.log(title);
 
 

    return(
      <TouchableOpacity> 
          <Text> {title}</Text>
          <Text>{questionsCount} Cards</Text>
            <Button onPress={() => navigation.navigate('Add Card', {deck:{...deck}})}  title="Add a New Card"/>
            <Button onPress={() => navigation.navigate('Add Quiz', {deck:{...deck}})} title="Start a new Quiz" />
      </TouchableOpacity>
    )
  }
}

function mapStateToProps (decks) {return {decks}}
export default connect(mapStateToProps)(DeckPage)
