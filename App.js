import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
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

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Navbar title={"Todo App"} />
      <AddTodo onSubmit={addTodo} />

      <FlatList
        style={{ margin: 10 }}
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
      />

      {/* 
      <ScrollView style={{ margin: 10 }}>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </ScrollView> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 30,
    // paddingVertical: 20,
  },
});
