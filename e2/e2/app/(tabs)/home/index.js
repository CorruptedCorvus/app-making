import { View, Text, FlatList, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { Link, router } from 'expo-router';
import { useExpenses } from '../../../store';

export default function HomeScreen() {
  const { expenses } = useExpenses();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = getStyles(isDark);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.expenseText}>{item.title}</Text>
            <Text style={styles.expenseText}>${item.amount}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No expenses yet.</Text>}
      />

      <Link href="/(tabs)/home/modal" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add New Expense</Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/home/category')}>
        <Text style={styles.buttonText}>Categories</Text>
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
      marginBottom: 20,
      color: isDark ? '#fff' : '#111',
    },
    expenseItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#333' : '#ddd',
    },
    expenseText: {
      color: isDark ? '#ddd' : '#222',
      fontSize: 16,
    },
    emptyText: {
      textAlign: 'center',
      color: isDark ? '#666' : '#999',
      marginTop: 40,
    },
    button: {
      backgroundColor: isDark ? '#1c1c1e' : '#222',
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 10,
      marginTop: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  });

