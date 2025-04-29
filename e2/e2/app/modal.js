import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function ModalScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const router = useRouter();

  const handleSave = () => {
    // Here you would normally save the new expense
    console.log("New Expense:", { title, amount });

    // Go back to the previous screen
    router.back();
  };

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>Add a New Expense</Text>

      <TextInput
        style={styles.input}
        placeholder="Expense Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Button title="Save Expense" onPress={handleSave} />
      <Button title="Cancel" color="red" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
  },
});
