import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import colors from "../Constants/colors";
import NumContainer from "../Components/Number";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Image
        source={{
          uri: "https://th.bing.com/th/id/R.3b2edeffcf665a340d6ede9837ea7030?rik=M%2fGrsaHRJLR2yQ&riu=http%3a%2f%2fimg.game.co.uk%2fml2%2f7%2f4%2f1%2f9%2f741913_gen_a.png&ehk=VHLlOytDEcQ0sb4sMs%2bcBoT%2fueuYzYlSfZp%2bUfLtCjE%3d&risl=&pid=ImgRaw&r=0",
        }}
        style={{ width: 300, height: 300 }}
      />

      <NumContainer>Number of Rounds: {props.roundsNum}</NumContainer>
      <NumContainer>Number was:{props.usernum}</NumContainer>
      <Button
        title="NEW GAME"
        color={colors.primary}
        onPress={props.onRestart}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
