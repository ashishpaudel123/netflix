import { StyleSheet } from 'react-native';

import LoginRegisterCard from '@/components/LoginRegisterCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <SafeAreaView edges={["left", "top", "right"]} style={{ flex: 1, backgroundColor: '#000' }}>
      <LoginRegisterCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
