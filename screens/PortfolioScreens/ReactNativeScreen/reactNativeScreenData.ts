import { Alert } from "react-native";

export const screenInfo =
  "Here, you will find a list of React Native projects that I’ve built, along with more information and further options. ";

export const alertBoxAction = (setPinkModeTheme: any) => {
  Alert.alert(
    "You're previewing Clay App! 😀 Have you tried Unicorn mode yet?",

    "You should, it's magical! 🧞‍♀️",
    [
      {
        text: "Maybe later",
      },
      {
        text: "No thanks",
        onPress: () => Alert.alert("Meanie! 😝"),
        style: "cancel",
      },
      { text: "OK", onPress: setPinkModeTheme },
    ],
    { cancelable: false },
  );
};
