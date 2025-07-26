import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const featured = [
  {
    id: 1,
    title: "Money Heist",
    subtitle: "Part 5",
    description: `In Money Heist, an enigmatic criminal mastermind known only as The Professor assembles a team of eight specialists with unique skills—and nothing to lose—for the most ambitious robbery in history: infiltrate the Royal Mint of Spain and print billions of euros. Disguised in red jumpsuits and Salvador Dalí masks, the crew must contend with elite police forces, internal power struggles, and their own turbulent pasts, all while trying to stay one step ahead of the law.

But what starts as a simple heist quickly spirals into something far more powerful. As the story unfolds, Money Heist transforms into a global movement of resistance and rebellion, exploring themes of identity, justice, love, sacrifice, and revolution. The characters—Tokyo, Berlin, Nairobi, Denver, Rio, Helsinki, Moscow, and more—become unlikely heroes, drawing public sympathy and sparking chaos across Spain.

With high-stakes tension, explosive twists, and emotional depth, Money Heist blends sharp storytelling, intense action, and deep character arcs to create one of the most popular and critically acclaimed international series of the decade.

Whether you're here for the romance, the politics, the thrill of the heist—or the sound of "Bella Ciao" echoing through a crowd—Money Heist is a heart-racing rollercoaster that will leave you breathless, episode after episode.
`,
    cast: "Álvaro Morte, Úrsula Corberó, Itziar Ituño",
    year: 2022,
    duration: "2h 30m",
    rating: "TV-MA",
    category: "Crime • Thriller • Drama ",
    poster: require("@/assets/images/posters/money-heist.jpg"),
    videoSource:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    subtitles: [
      {
        language: "English",
        uri: null,
      },
      {
        language: "Hindi",
        uri: null,
      },
    ],
  },
  {
    id: 2,
    title: "Squid Game",
    subtitle: "Season 1",
    description:
      "A deadly game where contestants risk their lives for a cash prize.",
    cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-jun",
    year: 2021,
    duration: "1h 45m",
    rating: "TV-MA",
    category: "Drama • Thriller • Mystery",
    poster: require("@/assets/images/posters/squid-game.jpg"),
    videoSource: null,
    subtitles: [
      {
        language: "English",
        uri: null,
      },
      {
        language: "Hindi",
        uri: null,
      },
    ],
  },
  {
    id: 3,
    title: "Stranger Things",
    subtitle: "Season 4",
    description:
      "A thrilling series about a group of kids in the 80s who encounter supernatural events.",
    poster: require("@/assets/images/posters/hero1.png"),
    cast: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
    year: 2022,
    duration: "2h 15m",
    rating: "TV-14",
    category: "Sci-Fi • Horror • Drama",
    videoSource:
      "https://ik.imagekit.io/ashishpaudel/netflix/video.webm/ik-video.mp4?updatedAt=1753162508413",
    subtitles: [
      {
        language: "English",
        uri: "https://ik.imagekit.io/ashishpaudel/netflix/subtitles/english.vtt",
      },
      {
        language: "Hindi",
        uri: "https://ik.imagekit.io/ashishpaudel/netflix/subtitles/hindi.vtt",
      },
    ],
  },
];

const categories = [
  {
    title: "Trending Now",
    items: [
      {
        id: 4,
        title: "The Silent City",
        subtitle: "Season 1",
        description: `In a world silenced by an unknown catastrophe, one survivor roams a desolate urban landscape seeking answers and hope. "The Silent City" is a gripping, visually haunting tale of isolation, memory, and survival.

As echoes of the past whisper through the empty streets, the survivor must confront inner demons and uncover the truth buried beneath the silence.`,
        cast: "Noah Wyle, Rosario Dawson, Benedict Wong",
        year: 2021,
        duration: "1h 50m",
        rating: "TV-14",
        category: "Sci-Fi • Mystery • Drama",
        poster: require("@/assets/images/posters/poster1.png"),
        videoSource: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitles: [
          { language: "English", uri: null },
          { language: "Spanish", uri: null },
        ],
      },
      {
        id: 5,
        title: "Echoes of War",
        subtitle: "Limited Series",
        description: `Amidst the chaos of war, a group of strangers is forced to unite for survival. "Echoes of War" explores the human cost of conflict through powerful storytelling, stunning visuals, and unforgettable performances.

As old secrets resurface and loyalties are tested, each character must face the echoes of their past decisions.`,
        cast: "Cillian Murphy, Jessica Chastain, Idris Elba",
        year: 2020,
        duration: "2h 10m",
        rating: "TV-MA",
        category: "War • Political • Thriller",
        poster: require("@/assets/images/posters/poster2.png"),
        videoSource: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        subtitles: [
          { language: "English", uri: null },
          { language: "French", uri: null },
        ],
      },
      {
        id: 6,
        title: "Digital Shadows",
        subtitle: "Part 2",
        description: `Inside the hidden corners of the internet, a team of elite hackers battles corporate corruption and digital surveillance. "Digital Shadows" takes you deep into a world where one keystroke can change everything.

With rapid twists, high-tech espionage, and complex characters, this techno-thriller keeps you guessing until the final byte.`,
        cast: "Rami Malek, Mackenzie Davis, Riz Ahmed",
        year: 2023,
        duration: "2h 00m",
        rating: "TV-MA",
        category: "Tech • Action • Thriller",
        poster: require("@/assets/images/posters/poster3.png"),
        videoSource: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        subtitles: [
          { language: "English", uri: null },
          { language: "German", uri: null },
        ],
      },
      {
        id: 7,
        title: "Lost Legacy",
        subtitle: "Volume I",
        description: `An archaeologist’s discovery of an ancient artifact sets off a globe-trotting race against secret societies and mercenaries. "Lost Legacy" blends myth and mystery in an epic journey through history.

As legends come alive and puzzles unfold, the fight for truth could change everything we know about the past.`,
        cast: "Tom Holland, Alicia Vikander, Pedro Pascal",
        year: 2019,
        duration: "2h 15m",
        rating: "TV-14",
        category: "Adventure • Mystery • History",
        poster: require("@/assets/images/posters/poster4.png"),
        videoSource: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        subtitles: [
          { language: "English", uri: null },
          { language: "Italian", uri: null },
        ],
      },
    ],
  },
  {
    title: "Top Picks for You",
    items: [
      {
        id: 7,
        title: "Lost Legacy",
        subtitle: "Volume I",
        description: `An archaeologist’s discovery of an ancient artifact sets off a globe-trotting race against secret societies and mercenaries. "Lost Legacy" blends myth and mystery in an epic journey through history.

As legends come alive and puzzles unfold, the fight for truth could change everything we know about the past.`,
        cast: "Tom Holland, Alicia Vikander, Pedro Pascal",
        year: 2019,
        duration: "2h 15m",
        rating: "TV-14",
        category: "Adventure • Mystery • History",
        poster: require("@/assets/images/posters/poster5.png"),
        videoSource: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        subtitles: [
          { language: "English", uri: null },
          { language: "Italian", uri: null },
        ],
      },
      {
        id: 8,
        title: "Neon Pulse",
        subtitle: "Season 3",
        description: `In a hyper-stylized future city fueled by rebellion and rhythm, a DJ becomes the voice of an underground movement. "Neon Pulse" is an electrifying journey through beats, betrayal, and burning neon streets.

Fast-paced, gritty, and full of sound and fury, this show captures a revolution powered by music.`,
        cast: "Zendaya, Timothée Chalamet, Ken Watanabe",
        year: 2022,
        duration: "1h 50m",
        rating: "TV-MA",
        category: "Cyberpunk • Music • Thriller",
        poster: require("@/assets/images/posters/poster6.png"),
        videoSource: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        subtitles: [
          { language: "English", uri: null },
          { language: "Korean", uri: null },
        ],
      },
      {
        id: 9,
        title: "Crimson Tide",
        subtitle: "Final Mission",
        description: `Onboard a nuclear submarine, tensions escalate as a crew faces a mutiny over a suspected missile launch. "Crimson Tide" is a deep-sea thriller that challenges authority, duty, and moral decisions under pressure.

Intense and claustrophobic, the film explores leadership in crisis and the balance between trust and command.`,
        cast: "Denzel Washington, Gene Hackman, Viggo Mortensen",
        year: 2018,
        duration: "1h 55m",
        rating: "TV-MA",
        category: "Action • Drama • Thriller",
        poster: require("@/assets/images/posters/poster7.png"),
        videoSource: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        subtitles: [
          { language: "English", uri: null },
          { language: "Russian", uri: null },
        ],
      },
      {
        id: 10,
        title: "Parallel Minds",
        subtitle: "Chapter One",
        description: `A groundbreaking AI contact lens capable of recording memories is at the center of a dangerous experiment. When its creator is murdered, a detective and researcher uncover a conspiracy that threatens reality itself.

"Parallel Minds" fuses sci-fi and noir, asking: what happens when your memories are no longer your own?`,
        cast: "Tommie-Amber Pirie, Greg Bryk, Neil Napier",
        year: 2021,
        duration: "1h 42m",
        rating: "TV-14",
        category: "Sci-Fi • Mystery • Thriller",
        poster: require("@/assets/images/posters/poster8.png"),
        videoSource: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        subtitles: [
          { language: "English", uri: null },
          { language: "Japanese", uri: null },
        ],
      },
    ],
  },
];


export default function HomeScreen() {
  const params = useLocalSearchParams();

  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heroMetaContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/netflix.png")}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push("/profile");
          }}
          style={styles.logoContainer}
        >
          <Image
            source={require("@/assets/images/profileIcon.png")}
            style={styles.profileIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.featuredContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featured.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => {
                  router.push({
                    pathname: "/carddetails",
                    params: {
                      id: item.id,
                      title: item.title,
                      poster: item.poster,
                      description: item.description,
                      videoSource: item.videoSource,
                      subtitle: item.subtitle,
                      cast: item.cast,
                      year: item.year,
                      duration: item.duration,
                      rating: item.rating,
                      category: item.category,
                      subtitles: item.subtitles?.map((sub) => {
                        return { language: sub?.language, uri: sub?.uri };
                      }),
                    },
                  });
                  console.log(
                    "Navigating detail screen:",
                    "id:",
                    item.id,
                    "title:",
                    item.title,
                    "videoSource:",
                    item.videoSource,
                    "year:",
                    item.year,
                    "duration:",
                    item.duration
                  );
                }}
                key={item.id}
                style={styles.featuredPosterWrapper}
              >
                <Image
                  source={item.poster}
                  style={styles.featuredPoster}
                  resizeMode="cover"
                />
                {/* Overlay for visibility */}
                <View style={styles.featuredOverlay} />
                {/* Title and buttons at bottom of image */}
                <View style={styles.heroMetaAbsolute}>
                  <Text style={styles.heroTitle}>{item.title}</Text>
                  <View style={styles.heroActions}>
                    <TouchableOpacity style={styles.heroActionBtn}>
                      <Text style={styles.heroActionText}>My List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.heroActionBtn, styles.playBtn]}
                      onPress={() => {
                        router.push({
                          pathname: "/playvideo",
                          params: {
                            videoSource: item.videoSource,
                            title: item.title,
                            description: item.description,
                            subtitle: item.subtitle,
                            year: item.year,
                            duration: item.duration,
                            rating: item.rating,
                            category: item.category,
                            cast: item.cast,
                          },
                        });
                      }}
                    >
                      <Text style={styles.playBtnText}>▶ Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.heroActionBtn}>
                      <Text style={styles.heroActionText}>Info</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {categories.map((category) => (
          <View key={category.title} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {category.items.map((item) => (
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: "/carddetails",
                      params: {
                        title: item.title,
                        poster: item.poster,
                        description: item.description,
                        subtitle: item.subtitle,
                        year: item.year,
                        duration: item.duration,
                        cast: item.cast,
                        rating: item.rating,
                        category: item.category,
                        videoSource: item.videoSource,
                        subtitles: item.subtitles?.map((sub) => {
                          return { language: sub?.language, uri: sub?.uri };
                        })
                      },
                    })
                  }
                  key={item.id}
                >
                  <Image
                    source={item.poster}
                    style={styles.categoryPoster}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brand.secondary[700],
    paddingStart: 16,
  },
  heroMetaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 9,
    width: "100%",
    gap: 16,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 55,
    height: 30,
    position: "relative",
    left: -15,
    top: 0,
    marginTop: 0,
  },
  searchContainer: {
    flex: 3,
    minWidth: 120,
  },
  searchInput: {
    backgroundColor: Colors.brand.secondary[800],
    color: "#fff",
    padding: 8,
    borderRadius: 8,
    width: "100%",
    marginTop: 0,
    fontSize: 16,
  },
  profileIcon: {
    width: "100%",
    height: 20,
    position: "relative",
    left: 0,
    top: 0,
    marginTop: 0,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  heroActions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginBottom: 8,
  },
  heroActionBtn: {
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  heroActionText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  playBtn: {
    backgroundColor: Colors.brand.primary[500],
  },
  playBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  featuredContainer: {
    marginBottom: 24,
  },
  featuredPosterWrapper: {
    position: "relative",
    width: width * 0.92,
    height: 400,
    marginRight: 16,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: Colors.brand.secondary[900],
  },
  featuredPoster: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  featuredOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  heroMetaAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 8,
  },
  categoryPoster: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: Colors.brand.secondary[900],
  },
});
