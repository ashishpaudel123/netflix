import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import "react-native-reanimated";

import NetflixSplashScreen from "@/components/SplashScreen";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRouter, useSegments } from "expo-router";
import AuthContext from "./Context/AuthContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loaded]);

  // Handling navigation based on authentication state
  useEffect(() => {
    if (!loaded || showSplash) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isLoggedIn && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (isLoggedIn && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [isLoggedIn, segments, loaded, showSplash]);

  if (!loaded) {
    return null;
  }

  if (showSplash) {
    return <NetflixSplashScreen />;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen 
          name="(auth)/login"
          options={{ animation: "slide_from_left"}} />
          <Stack.Screen
            name="(auth)/register"
            options={{ animation: "ios_from_right" }}
          />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="carddetails"
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="playvideo"
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
