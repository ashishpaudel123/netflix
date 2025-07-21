import { App } from "@/constants/AppInfo";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GoBackButton from "./GoBackButton";

export interface NetflixCardDetailsProps {
  title?: string;
  subtitle?: string;
  poster?: any;
  description?: string;
  duration?: string;
  year?: string;
  rating?: string;
  matchPercentage?: string;
  cast?: string;
  onPlay?: () => void;
  onAddToList?: () => void;
  onRate?: () => void;
  onShare?: () => void;
}

const NetflixCardDetails: React.FC<NetflixCardDetailsProps> = ({
  title = "BLACK MIRROR",
  subtitle = "BANDERSNATCH",
  poster = {
    uri: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
  },
  description = "In 1984, a young programmer begins to question reality as he adapts a dark fantasy novel into a video game. A mind-bending tale with multiple endings",
  duration = "1h 30m",
  year = "2018",
  rating = "M18",
  matchPercentage = "89% match",
  cast = "Fionn Whitehead, Will Poulter, Craig Parkinson",
  onPlay,
  onAddToList,
  onRate,
  onShare,
}) => {
  const [isInMyList, setIsInMyList] = useState(false);
  const scalePlayAnim = useRef(new Animated.Value(1)).current;
  const scaleLikeAnim = useRef(new Animated.Value(1)).current;
  const scaleMylistAnim = useRef(new Animated.Value(1)).current;
  const handlePlayPressIn = () => {
    Animated.spring(scalePlayAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePlayPressOut = () => {
    Animated.spring(scalePlayAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleLikePressIn = () => {
    Animated.spring(scaleLikeAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handleLikePressOut = () => {
    Animated.spring(scaleLikeAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleMyListPressIn = () => {
    Animated.spring(scaleMylistAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handleMyListPressOut = () => {
    Animated.spring(scaleMylistAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleAddToList = () => {
    setIsInMyList(!isInMyList);
    onAddToList && onAddToList();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Poster with Netflix badge */}
        <Animated.View
          style={[
            { transform: [{ scale: scalePlayAnim }] },
            styles.posterContainer,
          ]}
        >
          <Image source={poster} style={styles.poster} resizeMode="cover" />
          <GoBackButton style={styles.goBackButton} />

          <View style={styles.netflixBadge}>
            <Text style={styles.netflixText}>{App.name}</Text>
          </View>
        </Animated.View>

        {/* Content */}
        <View style={styles.content}>
          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>

          {/* Match percentage and details */}
          <View style={styles.metaInfo}>
            <Text style={styles.matchPercentage}>{matchPercentage}</Text>
            <Text style={styles.year}>{year}</Text>
            <View style={styles.ratingBadge}>
              <Text style={styles.rating}>{rating}</Text>
            </View>
            <Text style={styles.duration}>{duration}</Text>
          </View>

          {/* Play button */}
          <Animated.View style={[{ transform: [{ scale: scalePlayAnim }] }]}>
            <Pressable
              onPressIn={handlePlayPressIn}
              onPressOut={handlePlayPressOut}
              style={styles.playButton}
              onPress={onPlay}
            >
              <Ionicons name="play" size={20} color="white" />
              <Text style={styles.playButtonText}>{App.playButton}</Text>
            </Pressable>
          </Animated.View>

          {/* Description */}
          <Text style={styles.description}>{description}</Text>

          {/* Cast */}
          <Text style={styles.cast}>
            <Text style={styles.castLabel}>{App.cast}: </Text>
            {cast}
          </Text>

          {/* Action buttons */}
          <View style={styles.actionButtons}>
            <Animated.View
              style={[{ transform: [{ scale: scaleMylistAnim }] }]}
            >
              <Pressable
                onPressIn={handleMyListPressIn}
                onPressOut={handleMyListPressOut}
                onPress={handleAddToList}
                style={styles.actionBtn}
              >
                <View style={styles.iconContainer}>
                  {isInMyList ? (
                    <Ionicons name="checkmark" size={20} color="white" />
                  ) : (
                    <View style={styles.checkboxEmpty} />
                  )}
                </View>
                <Text style={styles.actionText}>{App.myList}</Text>
              </Pressable>
            </Animated.View>

            <Animated.View style={[{ transform: [{ scale: scaleLikeAnim }] }]}>
              <Pressable
                onPressIn={handleLikePressIn}
                onPressOut={handleLikePressOut}
                style={styles.actionBtn}
                onPress={onRate}
              >
                <View style={styles.iconContainer}>
                  <Ionicons name="thumbs-up-outline" size={20} color="white" />
                </View>
                <Text style={styles.actionText}>{App.rate}</Text>
              </Pressable>
            </Animated.View>

            <TouchableOpacity style={styles.actionBtn} onPress={onShare}>
              <View style={styles.iconContainer}>
                <Ionicons name="share-outline" size={20} color="white" />
              </View>
              <Text style={styles.actionText}>{App.share}</Text>
            </TouchableOpacity>
          </View>

          {/* Progress bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>

          {/* Trailers section */}
          <View style={styles.trailersSection}>
            <Text style={styles.trailersTitle}>
              {App.TrailersAndMore.toUpperCase()}
            </Text>
            <View style={styles.trailerContainer}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=200&fit=crop",
                }}
                style={styles.trailerThumbnail}
                resizeMode="cover"
              />
              <TouchableOpacity style={styles.trailerPlayButton}>
                <View style={styles.trailerPlayIcon}>
                  <Ionicons name="play" size={20} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  goBackButton: {
    position: "absolute",
    top: 4,
    left: 48,
    zIndex: 1000,
    padding: 7,
    backgroundColor: "red",
    borderRadius: 20,
  },
  scrollView: {
    flex: 1,
  },
  posterContainer: {
    position: "relative",
  },
  poster: {
    width: "100%",
    height: 350,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  netflixBadge: {
    position: "absolute",
    top: 10,
    right: 55,
    backgroundColor: Colors.brand.primary[500],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 2,
  },
  netflixText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  starBadge: {
    position: "absolute",
    top: 10,
    left: 55,
    backgroundColor: Colors.brand.primary[500],
    width: 20,
    height: 20,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  starIcon: {
    width: 8,
    height: 8,
    backgroundColor: "white",
    transform: [{ rotate: "45deg" }],
  },
  content: {
    paddingVertical: 20,
    backgroundColor: Colors.brand.secondary[900],
  },
  titleContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2,
  },
  metaInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: 16,
  },
  matchPercentage: {
    color: "#10b981",
    fontSize: 14,
    fontWeight: "600",
  },
  year: {
    color: "#9ca3af",
    fontSize: 14,
  },
  ratingBadge: {
    borderWidth: 1,
    borderColor: "#6b7280",
    paddingHorizontal: 4,
    paddingVertical: 0,
  },
  rating: {
    color: "#9ca3af",
    fontSize: 12,
  },
  duration: {
    color: "#9ca3af",
    fontSize: 14,
  },
  playButton: {
    backgroundColor: Colors.brand.primary[500],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 16,
    gap: 8,
    marginHorizontal: 20,
  },
  playButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#d1d5db",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
    textAlign: "center",
  },
  cast: {
    color: "#9ca3af",
    fontSize: 14,
    marginBottom: 24,
    textAlign: "center",
  },
  castLabel: {
    color: "#d1d5db",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  actionBtn: {
    alignItems: "center",
    gap: 4,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    color: "white",
    fontSize: 12,
  },
  checkboxEmpty: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  progressContainer: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  progressBar: {
    width: "100%",
    height: 4,
    backgroundColor: "#374151",
    borderRadius: 2,
  },
  progressFill: {
    backgroundColor: Colors.brand.primary[500],
    height: 4,
    borderRadius: 2,
    width: "30%",
  },
  trailersSection: {
    marginBottom: 0,
  },
  trailersTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  trailerContainer: {
    position: "relative",
  },
  trailerThumbnail: {
    width: "100%",
    height: 128,
    borderRadius: 4,
  },
  trailerPlayButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -24 }, { translateY: -24 }],
  },
  trailerPlayIcon: {
    width: 48,
    height: 48,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  bottomNav: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  navText: {
    color: "#9ca3af",
    fontSize: 12,
  },
});

export default NetflixCardDetails;
