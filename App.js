import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AddTodo } from "./src/AddTodo";
import { Navbar } from "./src/Navbar";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Navbar title={"Todo App"} />
      <AddTodo onSubmit={addTodo} />
      <View>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
