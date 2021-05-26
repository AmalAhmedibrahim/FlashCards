import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Platform } from 'react-native';
// import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import { connect } from 'react-redux'


class Quiz extends Component {
  intialstate = {showCorrectAnswer: false,correctAns: 0,MyCounter: 0,}
  CorrectAns = () => this.setState((myState) => ({correctAns: myState.correctAns + 1,}))
  increaseMyCounter = () => {
    this.setState((myState) => ({
      showCorrectAnswer: false,
      MyCounter: myState.MyCounter + 1,
    }))
  }
  showCorrectAnswer = () => {
    this.setState((myState) =>({
      showCorrectAnswer: !myState.showCorrectAnswer
    }))
  }
  OnAnswer = (answer) => {
    this.increaseMyCounter()
    answer === 'correctAns' && this.CorrectAns()
  }

  restart = () => {
    this.setState(() => ({
      correctAns: 0,
      MyCounter: 0,
    }))
  }

  render() {
    const { deck } = this.props.route.params
    const { questions , title } = this.props.route.params.deck
    const { navigation } = this.props
    const QuestionsCount = questions.length
    if (this.intialstate.MyCounter < QuestionsCount) {
      return(
        <View>
            <Text>{this.intialstate.MyCounter + 1 } / {questions.length}</Text>
            <Text>{this.intialstate.showCorrectAnswer? questions[this.intialstate.MyCounter].answer: questions[this.intialstate.MyCounter].question}</Text>
              <Button title="Show Answer" onPress={() => this.showCorrectAnswer()}/>
              <Button title="Correct" onPress={() => this.OnAnswer('correctAns')}/>
              <Button title="Incorrect Ans" onPress={() => this.OnAnswer('incorrectAns')}/>
        </View>)
    } else {
      return(
        <View>
        { questions.length == 0?<Text>no cards in the deck</Text>: 
        <View>
              <Text>{this.intialstate.correctAns} / {this.intialstate.MyCounter} correct Answers</Text>
                <Button onPress={() => this.restart()} title="start New quiz"/>
                <Button onPress={() => navigation.goBack()} title="return to deck"/>
            </View>
        }
        </View>
      )}}}
function mapStateToProps (decks) {return {decks}
}
export default connect(mapStateToProps)(Quiz)
