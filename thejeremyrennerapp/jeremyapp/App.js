import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import happyFace from './assets/happyrenner.png';
import sadFace from './assets/sadrenner.png';
import angryFace from './assets/angryrenner.png';
import confusedFace from './assets/confusedrenner.png';

export default function App() {

  const rennerFaces = [
    { id: "1", emotion: "happy", text: "Jeremy Renner feels happy today!", src: happyFace },
    { id: "2", emotion: "sad", text: "Jeremy Renner feels sad today...", src: sadFace },
    { id: "3", emotion: "angry", text: "Jeremy Renner is furious!", src: angryFace },
    { id: "4", emotion: "confused", text: "Jeremy Renner is confused...", src: confusedFace },
  ];  


  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {todos.map((todo) => (
          <View style={styles.todoContainer} >
            <TouchableOpacity key={todo.id} onPress={() => handleToggleCompleted(todo.id)}>
              <Text style={[styles.todoText, todo.completed && styles.completedText]}>
                {todo.text}
              </Text>
            </TouchableOpacity>
            <Button
              onPress={() => handleDeleteTodo(todo.id)}
              title="Delete"
              color="#841584"
              accessibilityLabel="Delete todo item"
            />
          </View>
        ))}

        <View>
          <TextInput
            value={newTodo}
            onChangeText={setNewTodo}
            placeholder="useless placeholder"
          />
          <Button
            onPress={handleSubmit}
            title="Add Todo"
            color="#841584"
            accessibilityLabel="Submit a new Todo List item"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
});

