export const NEW_DECK = 'NEW_DECK'
export const ADD_CARD = 'NEW_CARD'
export const RECEIVE_DECKS = 'RECEIVE_ALLDECKS'

export function addCard (title, card) {
  return { 
    type: ADD_CARD,
    card,
    title,
  }
}




export function newDeck (deck) {
  return {
    type: NEW_DECK,
    deck
  }
}


export function receiveAllDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
} 
