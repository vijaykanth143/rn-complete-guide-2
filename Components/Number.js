import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../Constants/colors";
const NumContainer = (props) => {
  return (
    <View style={styles.numcontainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  numcontainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumContainer;
