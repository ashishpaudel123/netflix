import GoBackButton from "@/components/GoBackButton";
import LoginRegisterCard from "@/components/LoginRegisterCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  return (
   <SafeAreaView style={{ flex: 1,backgroundColor: '#000000'}}>
    <GoBackButton style={{ position: 'absolute', top: 70, left: 20 ,zIndex:999}} />
      <LoginRegisterCard authCardName="Sign Up" authButtonName="Sign Up" secondButtonName="Sign Up with Apple"  forgetPassword = {false}/>
    </SafeAreaView>
  );
}