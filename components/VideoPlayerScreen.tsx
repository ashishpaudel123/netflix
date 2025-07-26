import { Colors } from "@/constants/Colors";
import { VideoPlayerScreenProps } from "@/type/type";
import { Ionicons } from "@expo/vector-icons";
import { useEvent } from "expo";
import { router } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const defaultVideoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoPlayerScreen({
  videoSource,
  title,
  description,
  subtitle,
  year,
  duration,
  cast,
  rating,
  category,
}: VideoPlayerScreenProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <SafeAreaView
      edges={["top"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {router.back()}} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Video Player */}
        <VideoScreen 
          videoSource={videoSource} 
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
        />
        
        {/* Movie Information */}
        <View style={styles.movieInfo}>
          <View style={styles.titleSection}>
            <Text style={styles.movieTitle}>{title}</Text>
            {year && (
              <Text style={styles.movieYear}>{year}</Text>
            )}
          </View>

          {subtitle && (
            <Text style={styles.subtitle}>{subtitle}</Text>
          )}

          <View style={styles.metaInfo}>
            {category && (
              <View style={styles.matchBadge}>
                <Text style={styles.matchText}>{category}</Text>
              </View>
            )}
            {rating && (
              <Text style={styles.rating}>{rating}</Text>
            )}
            {duration && (
              <Text style={styles.duration}>{duration}</Text>
            )}
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={() => setIsVideoPlaying(!isVideoPlaying)} style={styles.playButton}>
              <Ionicons name={isVideoPlaying ? "pause" : "play"} size={20} color="black" />
              <Text style={styles.playButtonText}>{isVideoPlaying ? "Pause" : "Play"}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.downloadButton}>
              <Ionicons name="download-outline" size={24} color="white" />
              <Text style={styles.actionButtonText}>Download</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="add-outline" size={24} color="white" />
              <Text style={styles.actionButtonText}>My List</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="thumbs-up-outline" size={24} color="white" />
              <Text style={styles.actionButtonText}>Rate</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-outline" size={24} color="white" />
              <Text style={styles.actionButtonText}>Share</Text>
            </TouchableOpacity>
          </View>

          {description && (
            <Text style={styles.description}>{description}</Text>
          )}

          {cast && (
            <View style={styles.castSection}>
              <Text style={styles.castLabel}>Cast: </Text>
              <Text style={styles.castText}>{cast}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function VideoScreen({ 
  videoSource, 
  isVideoPlaying, 
  setIsVideoPlaying 
}: { 
  videoSource?: string; 
  isVideoPlaying: boolean; 
  setIsVideoPlaying: (playing: boolean) => void; 
}) {
  const [showControls, setShowControls] = useState(false);
  const player = useVideoPlayer(
    videoSource ? videoSource : defaultVideoSource,
    (player) => {
      player.loop = true;
      player.play();
      setIsVideoPlaying(true);
    }
  );

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  // Sync the video player state with the isVideoPlaying state
  React.useEffect(() => {
    setIsVideoPlaying(isPlaying);
  }, [isPlaying, setIsVideoPlaying]);

  React.useEffect(() => {
    if (isVideoPlaying) {
      player.play();
    } else {
      player.pause();
    }
  }, [isVideoPlaying, player]);

  return (
    <View style={styles.videoContainer}>
      <TouchableOpacity 
        style={styles.videoWrapper}
        onPress={() => setShowControls(!showControls)}
        activeOpacity={1}
      >
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          startsPictureInPictureAutomatically
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brand.secondary[700],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  videoContainer: {
    width: "100%",
    height: 220,
    backgroundColor: "black",
    position: "relative",
  },
  videoWrapper: {
    width: "100%",
    height: "100%",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  videoControlsOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  centerPlayButton: {
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 50,
    padding: 20,
  },
  movieInfo: {
    padding: 16,
    paddingTop: 24,
  },
  titleSection: {
    marginBottom: 8,
  },
  movieTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  movieYear: {
    color: Colors.brand.secondary[300],
    fontSize: 16,
  },
  subtitle: {
    color: Colors.brand.secondary[300],
    fontSize: 14,
    marginBottom: 12,
  },
  metaInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    flexWrap: "wrap",
  },
  matchBadge: {
    backgroundColor: Colors.brand.primary[500],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 12,
    marginBottom: 8,
  },
  matchText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  rating: {
    color: Colors.brand.secondary[300],
    fontSize: 14,
    marginRight: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.brand.secondary[300],
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  duration: {
    color: Colors.brand.secondary[300],
    fontSize: 14,
    marginBottom: 8,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  playButton: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    flex: 1,
    marginRight: 12,
  },
  playButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    width: "100%",
  },
  downloadButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  actionButtonText: {
    color: Colors.brand.secondary[300],
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
  description: {
    color: "white",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  castSection: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  castLabel: {
    color: Colors.brand.secondary[300],
    fontSize: 14,
  },
  castText: {
    color: "white",
    fontSize: 14,
    flex: 1,
  },
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
  controlsContainer: {
    paddingVertical: 7,
    backgroundColor: Colors.brand.primary[700],
    borderRadius: 10,
    width: Dimensions.get("window").width - 40,
  },
});
