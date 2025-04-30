import { View, Text, FlatList, TouchableOpacity, useColorScheme, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const categories = [
  { id: '1', name: 'Food & Drinks' },
  { id: '2', name: 'Transport' },
  { id: '3', name: 'Entertainment' },
  { id: '4', name: 'Health' },
  { id: '5', name: 'Utilities' },
  { id: '6', name: 'Shopping' },
];

export default function CategoryScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const theme = styles(isDark);

  return (
    <View style={theme.container}>
      <Text style={theme.title}>Categories</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={theme.categoryItem}>
            <Text style={theme.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity onPress={() => router.push('/(tabs)/home')} style={theme.backButton}>
        <Text style={theme.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = (isDark) =>
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
    categoryItem: {
      padding: 16,
      backgroundColor: isDark ? '#1c1c1e' : '#f2f2f7',
      borderRadius: 12,
      marginBottom: 12,
    },
    categoryText: {
      fontSize: 18,
      color: isDark ? '#f2f2f7' : '#1c1c1e',
    },
    backButton: {
      marginTop: 30,
      paddingVertical: 14,
      alignItems: 'center',
      backgroundColor: isDark ? '#333' : '#ddd',
      borderRadius: 10,
    },
    backButtonText: {
      fontSize: 16,
      color: isDark ? '#fff' : '#000',
    },
  });
