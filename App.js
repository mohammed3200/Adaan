import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { MainScreen } from "./screen";
import { useFonts } from "expo-font";
import { Bg } from "./constants";



const App = () => {
  const [fontLoaded] = useFonts({
    "Tajawal-Light": require("./assets/Fonts/Tajawal-Light.ttf"),
    "Tajawal-Regular": require("./assets/Fonts/Tajawal-Regular.ttf"),
    "Tajawal-Medium": require("./assets/Fonts/Tajawal-Medium.ttf"),
    "Tajawal-Bold": require("./assets/Fonts/Tajawal-Bold.ttf"),
  });
  if (!fontLoaded) return null;
  

  return (
    <SafeAreaView style={styles.container} >
    <StatusBar style="auto" />
      <MainScreen />
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
