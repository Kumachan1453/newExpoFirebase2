import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFibr6AzDu9S_Yxpe6NU8N-wUUztiJN2g",
  authDomain: "newexpofirebase2-a3a70.firebaseapp.com",
  projectId: "newexpofirebase2-a3a70",
  storageBucket: "newexpofirebase2-a3a70.appspot.com",
  messagingSenderId: "402736408737",
  appId: "1:402736408737:web:cf097fe991c16e06afe8e0",
};

const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
