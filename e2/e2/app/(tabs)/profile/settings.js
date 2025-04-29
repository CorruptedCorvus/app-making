import { View, Text, Switch, StyleSheet, useColorScheme } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const theme = useColorScheme(); 

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      <Text style={[styles.title, theme === 'dark' && styles.darkText]}>
        Settings
      </Text>

      <View style={[styles.settingItem, theme === 'dark' && styles.darkSettingItem]}>
        <Text style={[styles.settingLabel, theme === 'dark' && styles.darkText]}>
          Enable Notifications
        </Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: '#ccc', true: '#007AFF' }}
          thumbColor={notificationsEnabled ? '#ffffff' : '#f4f3f4'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F8F8F8',
  },
  darkContainer: {
    backgroundColor: '#1C1C1E',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 32,
    color: '#000',
    textAlign: 'center',
  },
  darkText: {
    color: '#FFF',
  },
  settingItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  darkSettingItem: {
    backgroundColor: '#2C2C2E',
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});
