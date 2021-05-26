import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View , ScrollView } from 'react-native';
import { LoadIntialData, getAllDecks } from '../utils/helpers'
import { receiveAllDecks } from '../actions/action'
import DeckItem from './DeckItem'

class Home extends Component {
  async componentDidMount() {
    const {dispatch , navigate , decks } = this.props
    
    await getAllDecks().then((allDecks) => {
        allDecks == null && LoadIntialData();
        return allDecks
      }).then((allDecks) => {
       // console.log("hii");
        dispatch(receiveAllDecks(allDecks))
      }
    )
  }
  render() {
    const { navigation , decks } = this.props

    //console.log(Object.keys(decks).length );
    console.log("------------")
    // console.log(deck);
    // console.log(this.props);
    return(
      <ScrollView>
        { Object.keys(decks.decks).length > 0 && Object.keys(decks.decks).map((deck) => (
            <DeckItem deck={decks.decks[deck]} key={deck} navigation={navigation} />))}
      </ScrollView>
    )
  }
}
function mapStateToProps (decks) {
  return {decks}
}
export default connect(mapStateToProps)(Home)
