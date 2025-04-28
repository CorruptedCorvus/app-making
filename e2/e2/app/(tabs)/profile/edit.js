import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function EditProfileScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Edit Profile Screen</Text>
      {}
      <Button title="Save Changes" onPress={() => router.push("/profile")} />
    </View>
  );
}
