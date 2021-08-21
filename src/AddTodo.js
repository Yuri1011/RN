import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const addTodo = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Поле с названием дела не может быть пустым!");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Введите название дела..."
      />
      <Button title="Добавить" onPress={addTodo} />
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
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
