import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import type { ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native";

interface GoBackButtonProps {
  style?: ViewStyle;
}
export default function GoBackButton({ style }: GoBackButtonProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => router.back()} style={[styles.container, style]}>
      <Ionicons name="arrow-back" size={20} color="white" />
    </TouchableOpacity>
  );
}

const styles: { container: ViewStyle } = {
  container: {
    flex:1,
    padding: 5,
    backgroundColor:'red',
    borderRadius: 20,
  },
};


