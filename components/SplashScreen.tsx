import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, StatusBar } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface NetflixSplashScreenProps {
  onAnimationComplete?: () => void;
}

const NetflixSplashScreen: React.FC<NetflixSplashScreenProps> = ({
  onAnimationComplete,
}) => {
  const fadeOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoRotation = useRef(new Animated.Value(0)).current;
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const pulseScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const startAnimation = () => {
      // Reset all values
      fadeOpacity.setValue(0);
      logoScale.setValue(0.3);
      logoRotation.setValue(0);
      pulseScale.setValue(1);

      // Enhanced animation sequence
      const animations = Animated.sequence([
        Animated.delay(300),
        // Initial fade in with zoom
        Animated.parallel([
          Animated.timing(fadeOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.spring(logoScale, {
            toValue: 1.2,
            tension: 50,
            friction: 5,
            useNativeDriver: true,
          }),
        ]),
        // Slight rotation effect
        Animated.timing(logoRotation, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        // Scale to normal size
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 80,
          friction: 6,
          useNativeDriver: true,
        }),
        // Pulse effect
        Animated.loop(
          Animated.sequence([
            Animated.timing(pulseScale, {
              toValue: 1.05,
              duration: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(pulseScale, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }),
          ]),
          { iterations: 2 }
        ),
        Animated.delay(800),
        // Final zoom in and fade out
        Animated.parallel([
          Animated.timing(logoScale, {
            toValue: 1.8,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(containerOpacity, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      ]);

      animations.start(() => {
        onAnimationComplete?.();
      });
    };

    startAnimation();
  }, [
    fadeOpacity,
    logoScale,
    logoRotation,
    containerOpacity,
    pulseScale,
    onAnimationComplete,
  ]);

  const containerStyle = {
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#000000",
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
  };

  const logoStyle = {
    width: Math.min(screenWidth * 0.8, 300),
    height: Math.min(screenWidth * 0.2, 80),
    resizeMode: "contain" as "contain",
  };

  // Interpolate rotation
  const rotation = logoRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={[containerStyle, { opacity: containerOpacity }]}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Netflix Logo */}
      <Animated.View
        style={{
          opacity: fadeOpacity,
          transform: [
            { scale: Animated.multiply(logoScale, pulseScale) },
            { rotate: rotation },
          ],
        }}
      >
        <Image
          source={require('../assets/images/netflix.png')}
          style={logoStyle}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default NetflixSplashScreen;
