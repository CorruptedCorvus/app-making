import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function AddExpenseScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = getStyles(isDark);

  const handleSave = () => {
    console.log('Saved:', title, amount);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Expense</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const getStyles = (isDark) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: isDark ? '#000' : '#fff',
    },
    title: {
      fontSize: 28,
      fontWeight: '600',
      marginBottom: 24,
      color: isDark ? '#fff' : '#111',
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#444' : '#ccc',
      fontSize: 18,
      paddingVertical: 12,
      marginBottom: 20,
      color: isDark ? '#fff' : '#000',
    },
    button: {
      backgroundColor: isDark ? '#1c1c1e' : '#222',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  });
