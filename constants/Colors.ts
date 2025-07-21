/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  brand: {
    primary: {
      100: '#ffccd5',
      200: '#ff99a3',
      300: '#ff6672',
      400: '#ff3341',
      500: '#E50914', // Netflix Red
      600: '#b0060f',
      700: '#7a040b',
    },
    secondary: {
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#b3b3b3',
      400: '#808080',
      500: '#333333',
      600: '#232323',
      700: '#181818', // Netflix app background
      800: '#121212',
      900: '#000000',
    },
    tertiary: '#141414',
    accent: '#E50914',
  },
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
