// import { addDoc } from "@firebase/firestore";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { ListItem } from "../components/ListItem";
import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  addDoc,
  collection,
  // deleteDoc,
  updateDoc,
} from "firebase/firestore";

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

export const Task = () => {
  const [content, setContent] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(1);
  console.log("tasks", tasks);

  const addTasks = () => {
    if (content == "") {
      return false;
    }
    setId(id + 1);
    setTasks(tasks.concat([{ id: id, content: content }]));
    setContent(""); //関数を渡す。
    try {
      const docRef = addDoc(collection(db, "contents"), {
        content: content,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteTask = (item) => {
    console.log("item", item);
    // タスクごとの値（id）を持っていきたい。
    let array = tasks.filter((task) => {
      return task.id !== item.id; //taskとitemの違い。配列のリストを指定された回数ループさせているのがtask。itemはゴミ箱ボタンが押されたn回目のリスト。
      // コンポーネントに渡すのがprops。
      // 「id」はゴミ箱ボタンを押した「id」を指定できるようにする。すなわち「deleteTask」にゴミ箱ボタンを押した「id」を渡す。
    });
    setTasks(array);

    // const docRef = doc(db, "contents", content);

    // Remove the 'capital' field from the document
    // updateDoc(docRef, {
    //   capital: deleteField(content),
    // });
  };

  return (
    <View style={styles.taskContainer}>
      <View style={styles.inputAndPlusButton}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setContent(text)} //ここで引数が使われている。
          value={content}
          placeholder="本を読む"
        />
        <TouchableOpacity onPress={() => addTasks()}>
          <Text style={styles.plusButtonSize}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => {
          //renderItemで配列をループする。
          // console.log("item", item);
          return (
            <ListItem content={item.content} onPress={() => deleteTask(item)} />
            // ゴミ箱ボタンを押した「id」の指定は、ここが重要となる
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  inputAndPlusButton: {
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 30,
  },
  input: {
    width: 230,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
  line: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  listItemPlacement: {
    alignItems: "center",
    margin: 20,
    flex: 1,
  },
  listItemContainer: {
    flexDirection: "row",
    width: 300,
    height: 70,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  listStyleText: {
    margin: 20,
    fontSize: 19,
    fontWeight: "700",
  },
  listTrashButton: {
    marginLeft: "auto",
    marginRight: 15,
    justifyContent: "center",
  },
  plusButtonSize: {
    fontSize: 30,
  },
});

export default Task;
