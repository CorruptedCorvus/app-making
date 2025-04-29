import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { Link } from 'expo-router';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = getStyles(isDark);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

      <Link href="/(tabs)/profile/edit" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/(tabs)/profile/settings" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const getStyles = (isDark) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: isDark ? '#000' : '#fff',
    },
    title: {
      fontSize: 28,
      fontWeight: '600',
      marginBottom: 40,
      color: isDark ? '#fff' : '#111',
    },
    button: {
      backgroundColor: isDark ? '#1c1c1e' : '#222',
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 10,
      marginBottom: 20,
      width: 200,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  });
