
import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, TextInput, ScrollView, Button, Switch } from "react-native";
import FastImage from 'react-native-fast-image';

const rennerFaces = [
  { id: "1", emotion: "happy", text: "Jeremy Renner feels happy today!", src: require('./assets/images/happyrenner.png') },
  { id: "2", emotion: "sad", text: "Jeremy Renner feels sad today...", src: require('./assets/images/sadrenner.png') },
  { id: "3", emotion: "angry", text: "Jeremy Renner is furious!", src: require('./assets/images/angryrenner.png') },
  { id: "4", emotion: "confused", text: "Jeremy Renner is confused...", src: require('./assets/images/confusedrenner.png') },
];

export default function App() {
  const [selectedFaces, setSelectedFaces] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [inputText, setInputText] = useState("");

  const addFace = (face) => {
    if (!selectedFaces.some((item) => item.id === face.id)) {
      setSelectedFaces((prev) => [face, ...prev]);
    }
  };

  const removeFace = (id) => {
    setSelectedFaces((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#f5f5f5' }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, { color: isDarkMode ? '#fff' : '#000' }]}>Choose an expression:</Text>
      </View>

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          value={inputText}
          onChangeText={setInputText}
        />
      </View>

      {/* Expression Selection Grid */}
      <FlatList
        data={rennerFaces}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={styles.expressionGrid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.emojiItem} onPress={() => addFace(item)}>
            <Image source={item.src} style={styles.emojiImage} />
            <Text style={styles.emojiText}>{item.emotion}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Selected Faces List */}
      <FlatList
        data={selectedFaces}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.selectedItem}>
            <Image source={item.src} style={styles.selectedImage} />
            <Text style={styles.selectedText}>{item.text}</Text>
            <TouchableOpacity onPress={() => removeFace(item.id)} style={styles.removeButton}>
              <Text style={styles.removeText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No expressions selected.</Text>}
      />

      {/* Dark Mode Switch */}
      <View style={styles.switchContainer}>
        <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>

      {/* Button */}
      <Button title="Clear All" onPress={() => setSelectedFaces([])} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // General container styles
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#f5f5f5" 
  },

  // Selected Faces List
  selectedList: { 
    marginTop: 40 
  },
  selectedItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#fff", 
    padding: 10, 
    borderRadius: 10, 
    marginBottom: 5, 
    elevation: 3 
  },
  selectedImage: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    marginRight: 10 
  },
  selectedText: { 
    flex: 1, 
    fontSize: 16 
  },
  removeButton: { 
    backgroundColor: "#ff4d4d", 
    padding: 5, 
    borderRadius: 15 
  },
  removeText: { 
    color: "#fff", 
    fontWeight: "bold" 
  },
  emptyText: { 
    textAlign: "center", 
    marginVertical: 20, 
    color: "#999" 
  },

  // Expression Grid
  header: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginTop: 50, 
    marginBottom: 10 
  },
  expressionGrid: { 
    marginTop: 10 
  },

  // Emoji Grid Items
  emojiItem: { 
    flex: 1, 
    alignItems: "center", 
    margin: 10, 
    backgroundColor: "#fff", 
    padding: 10, 
    borderRadius: 10, 
    elevation: 2 
  },
  emojiImage: { 
    width: 60, 
    height: 60, 
    borderRadius: 30 
  },
  emojiText: { 
    marginTop: 5, 
    fontSize: 14, 
    fontWeight: "500" 
  }
});
