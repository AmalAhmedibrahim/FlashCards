import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard } from "../actions/action";
import { Text, View, TextInput, Button } from "react-native";
import { AddNewCardf } from "../utils/helpers";

class AddNewCard extends Component {
  state = {
    question: "",
    answer: "",
  };

  onValueChanged = (event, value) => {
    if (value === "question") {
      this.setState(() => ({
        question: event,
      }));
    }
    if (value === "answer") {
      this.setState(() => ({
        answer: event,
      }));
    }
  };

  onAddNewCard = () => {
    const { questions , title } = this.props.route.params.deck;
    const { dispatch , navigation } = this.props;
    // //console.log(deck)
    const newCard = {
      question: this.state.question,
      answer: this.state.answer,
    };
    console.log("new");
    console.log(newCard);
    //console.log(deck);
    const MyCard = {
      title: title,
      questions: questions.concat(newCard),
    };
    dispatch(addCard(title, MyCard));
    AddNewCardf(title, MyCard);
    this.setState(() => ({
      question: "",
      answer: "",
    }));
    navigation.goBack();
  };
 
  render() {
    const { title } = this.props.route.params.deck;
    return (
      <View>
        <Text>Add a New card for {title} </Text>
        <TextInput
          placeholder="Enter ur Question"
          value={this.state.question}
          onChangeText={(e) => this.onValueChanged(e, "question")}
        />
        <TextInput
          placeholder="Enter ur Answer"
          value={this.state.answer}
          onChangeText={(e) => this.onValueChanged(e, "answer")}
        />
        <Button
          title="Submit Answer"
          onPress={() => this.onAddNewCard()}
          disabled={this.state.question === "" || this.state.answer === "" ? true : false} />
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {decks};
}
export default connect(mapStateToProps)(AddNewCard);
