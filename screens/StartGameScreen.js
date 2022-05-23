import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../Components/Card";
import Colors from "../Constants/colors";
import Input from "../Components/input";
import NumContainer from "../Components/Number";
const StartGame = (props) => {
  const [enteredNum, setEnteredvalue] = useState("");
  const [confirmed, setConfirm] = useState(false);
  const [selectedNum, setSelectedNum] = useState();
  const Numberinputhandler = (inputText) => {
    setEnteredvalue(inputText.replace(/[^0-9]/g, ""));
  };
  console.log(enteredNum);

  const resetInput = () => {
    setEnteredvalue("");
    setConfirm(false);
  };

  const ConfirmInput = () => {
    const ChosenNum = parseInt(enteredNum);
    if (isNaN(ChosenNum) || ChosenNum <= 0 || ChosenNum > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInput }]
      );
      return;
    }
    setConfirm(true);
    setSelectedNum(ChosenNum);
    setEnteredvalue("");
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.confirm}>
        <Text>You Selected</Text>
        <NumContainer>{selectedNum}</NumContainer>
        <Button
          title="START GAME"
          color={Colors.primary}
          onPress={() => props.onStartGame(selectedNum)}
        />
      </View>
    );
  }
  console.log("rest", enteredNum);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game</Text>
        {/* while using emulator use Card instead View */}
        <View style={styles.inputCon}>
          <Text>Select a Number</Text>
          <TextInput
            blurOnSubmit
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={2}
            style={styles.input}
            onChangeText={Numberinputhandler}
            value={enteredNum}
          />

          <View style={styles.buttonCon}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInput}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={ConfirmInput}
                color={Colors.primary}
              />
            </View>
          </View>
        </View>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputCon: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    // Remove below css while using emulator
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 8,
    padding: 20,
    borderRadius: 10,
  },
  buttonCon: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "45%",
  },
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,

    width: 50,
    textAlign: "center",
  },
  confirm: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGame;
