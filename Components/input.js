import React from "react";

import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    // while using emulater use this css in where ur using this input
    width: 50,
    textAlign: "center",
  },
});

export default Input;
// Use this while using emulater in return
{
  /* <TextInput style={{ ...styles.input, ...props.style }} />; */
}
