export const STORAGE_KEY = 'fCard:data'
import AsyncStorage from '@react-native-async-storage/async-storage';

let intialData = {
  Angular: {
    title: 'Angular',
    questions: [
      {
        question: 'Whats is NGRX',
        answer: 'framework for building reactive applications in Angular'
      },
      {
        question: 'Whats is Angular',
        answer: 'Frontend Frameweork'
      }
    ]
  },
}

export async function LoadIntialData () {
  let conrainsData = false;

  await AsyncStorage.getItem(STORAGE_KEY).then((data) => {data ? conrainsData = true : conrainsData = false})
  !conrainsData &&  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(intialData))
}


export async function saveNewDeckTitle (title) {
  let deckNew = {
    [title]: {
      title: title,
      questions: [],
    }
  }
  console.log("hii");
 await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deckNew))
}

export async function AddNewCardf (title, card) {
  return  await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({[title]: card}))
}

export async function getAllDecks () {
  return await AsyncStorage.getItem(STORAGE_KEY).then(JSON.parse)
}
export async function clearAllData() {
return await AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => console.log("done"));
}
