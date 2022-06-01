import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreenAnimation from "./Components/SplashScreenAnimation";
import { store } from "./Utils/store";
import { Provider } from "react-redux";
import Overview from "./Screens/Overview";
import ExpensesForm from "./Components/ExpensesForm";
import Login from "./Components/Login";

// Uncomment ReduxStateTest to test various state actions and reducers
// import ReduxStateTest from "./Components/ReduxStateTest";

export default function App() {
  const [loggedIn, setLoggedIn] = useState({
    status: "",
    screen: "splash",
  });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* Uncomment ReduxStateTest to test various state actions and reducers */}
        {/* <ReduxStateTest /> */}
        {/* <ExpensesForm /> */}
        {loggedIn.screen === "splash" ? (
          <SplashScreenAnimation setLoggedIn={setLoggedIn} />
        ) : loggedIn.screen === "login" ? (
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        ) : (
          <Overview />
        )}
        <StatusBar style="auto" />        
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
