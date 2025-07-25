import { StyleSheet } from 'react-native';

import LoginRegisterCard from '@/components/LoginRegisterCard';
import { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from '../Context/AuthContext';

export default function Login() {
    const { setIsLoggedIn } = useContext(AuthContext);

  return (
    <SafeAreaView edges={["left", "top", "right"]} style={{ flex: 1, backgroundColor: '#000' }}>
      <LoginRegisterCard onAuthButtonPress={() => setIsLoggedIn(true)} />
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
