import { Colors } from "@/constants/Colors";
import { VideoPlayerScreenProps } from "@/type/type";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBackButton from "./GoBackButton";
export const defaultVideoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoPlayerScreen({
  videoSource,
  title = "Video Player",
}: VideoPlayerScreenProps) {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#181818" }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 0,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginLeft: 58,
            position: "absolute",
            top: 4,
          }}
        >
          {title}
        </Text>
        <GoBackButton style={{ position: "absolute", top: 0, left: 15 }} />
      </View>
      <VideoScreen videoSource={videoSource} />
    </SafeAreaView>
  );
}

function VideoScreen({ videoSource }: VideoPlayerScreenProps) {
  const player = useVideoPlayer(
    videoSource ? videoSource : defaultVideoSource,
    (player) => {
      player.loop = true;
      player.play();
    }
  );

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <View style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      <TouchableOpacity
        style={styles.playPauseBtn}
        onPress={() => {
          if (isPlaying) {
            player.pause();
          } else {
            player.play();
          }
        }}
      >
        <Text style={styles.playPauseBtnText}>
          {isPlaying ? "Pause" : "Play"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  playPauseBtn: {
    backgroundColor: Colors.brand.primary[500],
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  playPauseBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: Dimensions.get("window").width - 20,
    height: 275,
  },
  controlsContainer: {
    paddingVertical: 7,
    backgroundColor: Colors.brand.primary[700],
    borderRadius: 10,
    width: Dimensions.get("window").width - 40,
  },
});
