import React, { useState, useRef, useEffect } from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumContainer from "../Components/Number";
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const RandomNum = Math.floor(Math.random() * (max - min)) + min;
  if (RandomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return RandomNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setrounds] = useState(0);
  const currentlow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const nextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      console.log("high", currentHigh);
      currentHigh.current = currentGuess;
    } else {
      currentlow.current = currentGuess;
    }
    const guessnum = generateRandomBetween(
      currentlow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(guessnum);
    setrounds((currentrounds) => currentrounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumContainer>{currentGuess}</NumContainer>
      <View style={styles.buttonview}>
        <Button title="LOWER" onPress={nextGuess.bind(this, "lower")} />
        <Button title="GREATER" onPress={nextGuess.bind(this, "greater")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonview: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
export default GameScreen;
