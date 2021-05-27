import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
export const STORAGE_KEY = 'fCard:data';
const NOTIFI_KEY = 'Noticards:notifications';

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
function createNotification() {

}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFI_KEY).then(Notifications.cancelAllScheduledNotificationsAsync())
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFI_KEY)
    .then(JSON.parse).then((data) => {
      
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS) .then(({ status }) => {

            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(

                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              );

              AsyncStorage.setItem(NOTIFI_KEY, JSON.stringify(true))
              
            } else {
              console.log("not granted")
            }
          })
      }
    })
}