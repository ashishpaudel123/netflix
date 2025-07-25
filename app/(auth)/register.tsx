import GoBackButton from "@/components/GoBackButton";
import LoginRegisterCard from "@/components/LoginRegisterCard";
import { router } from "expo-router";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../Context/AuthContext";

export default function Register() {
  const { setIsLoggedIn } = useContext(AuthContext);

  return (
   <SafeAreaView style={{ flex: 1,backgroundColor: '#000000'}}>
    <GoBackButton iconSize={23} style={{ position: 'absolute', top: 70, left: 20 ,zIndex:999,backgroundColor:'transparent'}} />
      <LoginRegisterCard 
        authCardName="Sign Up" 
        isLoginCard={false}
        authButtonName="Sign Up" 
        secondButtonName="Sign Up with Apple"  
        forgetPassword={false}
        newOrAlreadyUserText="Already have an account?"
        newOrAlreadyUserButtonPress={() => {router.push("/(auth)/login")}}
        newOrAlreadyUserButtonName="Sign In"
        onAuthButtonPress={() => setIsLoggedIn(true)}
      />
    </SafeAreaView>
  );
}