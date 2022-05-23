import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Card from "./Components/Card";
import Header from "./Components/Header";
import StartGame from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import GameOver from "./screens/GameOver";
export default function App() {
  const [userNum, setUSernum] = useState();
  const [guessRounds, setGuessrounds] = useState(0);

  const configureNewGame = () => {
    setGuessrounds(0);
    setUSernum(null);
  };

  const StartgameHandler = (selectedNum) => {
    setUSernum(selectedNum);
  };
  const gameOverHandler = (noofRounds) => {
    setGuessrounds(noofRounds);
  };
  let content = <StartGame onStartGame={StartgameHandler} />;

  if (userNum && guessRounds <= 0) {
    content = <GameScreen userChoice={userNum} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        usernum={userNum}
        roundsNum={guessRounds}
        onRestart={configureNewGame}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
