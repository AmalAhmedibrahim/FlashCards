import { ADD_CARD , RECEIVE_DECKS, NEW_DECK,  } from '../actions/action'
function decks (state = {}, action) {
  switch (action.type) {
    case NEW_DECK :
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD : 
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: action.card.questions
        }
      }
      case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    
    default :
      return state
  }
}

export default decks
