import GoBackButton from "@/components/GoBackButton";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { App } from "@/constants/AppInfo";
import { Colors } from "@/constants/Colors";
import React, { useContext } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../Context/AuthContext";

const profileData = [
  {
    id: 1,
    name: "John",
    avatar: require("@/assets/images/profileIcon.png"),
    isMain: true,
  },
  {
    id: 2,
    name: "Kids",
    avatar: require("@/assets/images/profileIcon.png"),
    isMain: false,
  },
];

const settingsOptions = [
  {
    id: 1,
    title: "Account",
    icon: "person.circle",
    description: "Manage your account settings",
  },
  {
    id: 2,
    title: "Download Settings",
    icon: "arrow.down.circle",
    description: "Smart Downloads, Video Quality",
  },
  {
    id: 3,
    title: "App Settings",
    icon: "gear",
    description: "Dark Mode, Cellular Data usage",
  },
  {
    id: 4,
    title: "My List",
    icon: "heart.circle",
    description: "View your saved movies and shows",
  },
  {
    id: 5,
    title: "Notifications",
    icon: "bell.circle",
    description: "Push notifications, Email preferences",
  },
  {
    id: 6,
    title: "Privacy",
    icon: "lock.circle",
    description: "Manage your privacy settings",
  },
  {
    id: 7,
    title: "Help & Support",
    icon: "questionmark.circle",
    description: "FAQ, Contact us, About",
  },
];

export default function Profile() {
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Sign Out",
          style: "destructive",
          onPress: () => {
            setIsLoggedIn(false);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleSettingPress = (title: string) => {
    Alert.alert(title, `${title} feature coming soon!`);
  };

  return (
    <SafeAreaView edges={["left", "top", "right"]} style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Profiles Section */}
        <View style={styles.section}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10,justifyContent: "center" }}>
            <GoBackButton style={{ position: "absolute", left: 0, top: 0,backgroundColor: "transparent" }} />
            <Text style={styles.sectionTitle}>Profiles</Text>
          </View>

          {/* Main Profile Section */}
          {profileData
            .filter((profile) => profile.isMain)
            .map((profile) => (
              <TouchableOpacity
                key={profile.id}
                style={styles.mainProfileContainer}
                onPress={() =>
                  Alert.alert("Profile", `Switching to ${profile.name}`)
                }
              >
                <Image
                  source={profile.avatar}
                  style={styles.mainProfileAvatar}
                />
                <Text style={styles.mainProfileName}>{profile.name}</Text>
                <Text style={styles.mainProfileBadge}>Main Profile</Text>
              </TouchableOpacity>
            ))}

          {/* Other Profiles */}
          <View style={styles.otherProfilesContainer}>
            {profileData
              .filter((profile) => !profile.isMain)
              .map((profile) => (
                <TouchableOpacity
                  key={profile.id}
                  style={styles.otherProfileItem}
                  onPress={() =>
                    Alert.alert("Profile", `Switching to ${profile.name}`)
                  }
                >
                  <Image
                    source={profile.avatar}
                    style={styles.otherProfileAvatar}
                  />
                  <Text style={styles.otherProfileName}>{profile.name}</Text>
                </TouchableOpacity>
              ))}

            <TouchableOpacity
              style={styles.addProfileItem}
              onPress={() =>
                Alert.alert(
                  "Add Profile",
                  "Create new profile feature coming soon!"
                )
              }
            >
              <View style={styles.addProfileIcon}>
                <IconSymbol
                  name="plus"
                  size={24}
                  color={Colors.brand.secondary[400]}
                />
              </View>
              <Text style={styles.addProfileText}>Add Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          {settingsOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.settingItem}
              onPress={() => handleSettingPress(option.title)}
            >
              <IconSymbol
                name={option.icon as any}
                size={24}
                color={Colors.brand.secondary[300]}
              />
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>{option.title}</Text>
                <Text style={styles.settingDescription}>
                  {option.description}
                </Text>
              </View>
              <IconSymbol
                name="chevron.right"
                size={16}
                color={Colors.brand.secondary[400]}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <IconSymbol
              name="rectangle.portrait.and.arrow.right"
              size={20}
              color="#fff"
            />
            <Text style={styles.logoutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoText}>{`${App.name} ${App.version}`}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brand.secondary[900],
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.brand.secondary[700],
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  profilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  mainProfileContainer: {
    alignItems: "center",
    marginBottom: 25,
    paddingVertical: 15,
  },
  mainProfileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: Colors.brand.primary[500],
  },
  mainProfileName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 5,
  },
  mainProfileBadge: {
    color: Colors.brand.primary[500],
    fontSize: 12,
    fontWeight: "600",
    backgroundColor: Colors.brand.secondary[800],
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: "hidden",
  },
  otherProfilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    marginTop: 10,
  },
  otherProfileItem: {
    alignItems: "center",
    width: 80,
  },
  otherProfileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
  },
  otherProfileName: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  addProfileItem: {
    alignItems: "center",
    width: 80,
  },
  addProfileIcon: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: Colors.brand.secondary[700],
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  addProfileText: {
    color: Colors.brand.secondary[300],
    fontSize: 12,
    textAlign: "center",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.brand.secondary[800],
  },
  settingContent: {
    flex: 1,
    marginLeft: 15,
  },
  settingTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  settingDescription: {
    color: Colors.brand.secondary[400],
    fontSize: 13,
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.brand.primary[500],
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
  appInfo: {
    alignItems: "center",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.brand.secondary[800],
    marginHorizontal: 20,
  },
  appInfoText: {
    color: Colors.brand.secondary[400],
    fontSize: 12,
    marginBottom: 5,
  },
});
