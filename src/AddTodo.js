import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = (props) => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Добавить" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-around",
  },
  input: {
    width: "70%",
    margin: 2,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#3949ab",
  },
});
