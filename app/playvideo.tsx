import VideoPlayerScreen from "@/components/VideoPlayerScreen";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlayVideoScreen() {
  const params = useLocalSearchParams();
  // params: { title, poster, description }
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: '#181818' }}>
      <VideoPlayerScreen />
    </SafeAreaView>
  );
}