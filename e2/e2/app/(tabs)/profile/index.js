import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Screen</Text>
      {}
      <Button title="Go to Edit Profile" onPress={() => router.push("/profile/edit")} />
    </View>
  );
}
