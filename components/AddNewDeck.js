import React, { Component } from 'react';
import { Button, Text, TextInput, TouchableOpacity } from 'react-native';
import { newDeck } from '../actions/action'
import { saveNewDeckTitle } from '../utils/helpers'
import { connect } from 'react-redux'

class AddNewDeck extends Component {
  state = {
    newDeckName: '',
  }
  onValueChanged = (event) => {
    this.setState(() => ({
      newDeckName: event,
    }))
  }
  onAddDeck = () => {
    const {navigation , dispatch} = this.props
    const title = this.state.newDeckName

    dispatch(newDeck({
      [title]: {
        title: title,
        questions: [],
      }
    }))
    saveNewDeckTitle(title)


    this.setState(() => ({
      newDeckName: '',
    }))

    navigation.navigate('Deck Page', {deck:{
      title: title,
      questions: [],
    }})
  }

  render() {
    return(
      <TouchableOpacity>
        <Text>Create Deck</Text>
        <TextInput
          value={this.state.newDeckName}
          placeholder="enter title of new deck"
          onChangeText={(e) => this.onValueChanged(e)}
          />
        <Button disabled={this.state.newDeckName === '' ? true : false}
         onPress={() => this.onAddDeck()}  title="Submit" />
      </TouchableOpacity>
    )
  }
}
function mapStateToProps (decks) {
  return {decks}}
export default connect(mapStateToProps,)(AddNewDeck)
