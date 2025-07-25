import GoBackButton from "@/components/GoBackButton";
import LoginRegisterCard from "@/components/LoginRegisterCard";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../Context/AuthContext";

export default function Register() {
  const { setIsLoggedIn } = useContext(AuthContext);

  return (
   <SafeAreaView style={{ flex: 1,backgroundColor: '#000000'}}>
    <GoBackButton style={{ position: 'absolute', top: 70, left: 20 ,zIndex:999}} />
      <LoginRegisterCard 
        authCardName="Sign Up" 
        authButtonName="Sign Up" 
        secondButtonName="Sign Up with Apple"  
        forgetPassword={false}
        onAuthButtonPress={() => setIsLoggedIn(true)}
      />
    </SafeAreaView>
  );
}