import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Task } from "./src/screens/Task";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFibr6AzDu9S_Yxpe6NU8N-wUUztiJN2g",
  authDomain: "newexpofirebase2-a3a70.firebaseapp.com",
  projectId: "newexpofirebase2-a3a70",
  storageBucket: "newexpofirebase2-a3a70.appspot.com",
  messagingSenderId: "402736408737",
  appId: "1:402736408737:web:cf097fe991c16e06afe8e0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
  const docRef = addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

try {
  const docRef = addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912,
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

// // Add a new document in collection "cities"
// setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
// });

export default function App() {
  return (
    <View style={styles.container}>
      <Task />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
