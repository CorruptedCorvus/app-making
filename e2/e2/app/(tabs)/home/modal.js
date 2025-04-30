import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, useColorScheme } from 'react-native';
import { useState } from 'react';
import { useExpenses } from '../../../store';
import { router } from 'expo-router';

export default function AddExpenseModal() {
  const { addExpense } = useExpenses();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = getStyles(isDark);

  const handleSave = () => {
    if (!title || !amount) {
      Alert.alert('Missing Info', 'Please enter both a title and an amount.');
      return;
    }

    addExpense(title, amount);
    router.dismiss();
  };

  const handleCancel = () => {
    Alert.alert('Discard Expense?', 'Do you want to cancel adding this expense?', [
      { text: 'No', style: 'cancel' },
      { text: 'Yes', onPress: () => router.dismiss() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Expense</Text>

      <TextInput
        placeholder="Title"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Amount"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getStyles = (isDark) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: isDark ? '#000' : '#fff',
      justifyContent: 'center',
    },
    title: {
      fontSize: 26,
      fontWeight: '600',
      marginBottom: 24,
      color: isDark ? '#fff' : '#111',
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: isDark ? '#444' : '#ccc',
      backgroundColor: isDark ? '#1c1c1e' : '#f9f9f9',
      color: isDark ? '#fff' : '#000',
      padding: 12,
      fontSize: 16,
      borderRadius: 10,
      marginBottom: 16,
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 10,
    },
    button: {
      flex: 1,
      backgroundColor: '#007aff',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: isDark ? '#333' : '#ddd',
    },
    buttonText: {
      color: isDark ? '#fff' : '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  });
