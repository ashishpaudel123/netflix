import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import type { ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native";

interface GoBackButtonProps {
  style?: ViewStyle;
  iconSize?: number;
  iconColor?: string;
}
export default function GoBackButton({ style, iconSize = 20, iconColor = "white" }: GoBackButtonProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => router.back()} style={[styles.container, style]}>
      <Ionicons name="arrow-back" size={iconSize} color={iconColor} />
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


