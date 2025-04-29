import { Slot } from 'expo-router';
import { ExpenseProvider } from '../store';

export default function Layout() {
  return (
    <ExpenseProvider>
      <Slot />
    </ExpenseProvider>
  );
}
