import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="_index" options={{ title: 'Home' }} />
      <Stack.Screen name="_details" options={{ title: 'Expense Details' }} />
      <Stack.Screen name="category" options={{ title: 'Category' }} />
    </Stack>
  );
}
