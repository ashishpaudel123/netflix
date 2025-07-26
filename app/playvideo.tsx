import VideoPlayerScreen from "@/components/VideoPlayerScreen";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlayVideoScreen() {
  const params = useLocalSearchParams();
  // params: { title, poster, description }
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: '#181818' }}>
      <VideoPlayerScreen
        title={params.title as string}
        description={params.description as string}
        subtitle={params.subtitle as string}
        year={params.year as number | string}
        duration={params.duration as string}
        cast={params.cast as string}
        rating={params.rating as string}
        category={params.category as string}
        videoSource={params.videoSource as string}
      />
    </SafeAreaView>
  );
}