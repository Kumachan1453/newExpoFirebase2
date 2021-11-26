import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const ListItem = ({ content, onPress }) => {
  return (
    <View style={styles.listItemPlacement}>
      <View style={styles.listItemContainer}>
        <Text style={styles.listStyleText}>{content}</Text>
        <TouchableOpacity style={styles.listTrashButton} onPress={onPress}>
          <Text style={styles.minusButtonSize}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  minusButtonSize: {
    fontSize: 30,
  },
});
