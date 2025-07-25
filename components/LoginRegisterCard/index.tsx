import { Colors } from "@/constants/Colors";
import { authValidationSchema } from "@/Schema";
import { BlurView } from "expo-blur";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
    Button,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const backgroundImage = require("../../assets/images/posters/poster4.png");
interface LoginRegisterCardProps {
  authCardName: string;
  authButtonName: string;
  onAuthButtonPress: () => void;
  firstPlaceholderText?: string;
  secondPlaceholderText?: string;
  newOrAlreadyUserText?: string;
  secondButtonName?: string;
  checkBoxName?: string;
  forgetPasswordText?: string;
  forgetPassword: boolean;
}

const LoginRegisterCard: React.FC<LoginRegisterCardProps> = ({
  authCardName = "Sign In",
  authButtonName = "Sign In",
  firstPlaceholderText = "Email or phone number",
  secondPlaceholderText = "Password",
  newOrAlreadyUserText = "New to Netflix?",
  secondButtonName = "Use a Sign-In Code",
  checkBoxName = "Remember me",
  forgetPasswordText = "Forgot Password?",
  forgetPassword = true,
}) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView style={styles.overlay}>
        <View style={styles.container}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={authValidationSchema}
            onSubmit={(values) => {
              alert(`Submitted: ${values.email}, ${values.password}`);
            }}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{authCardName}</Text>
                <View style={styles.inputContainer}>
                  <View>
                    <TextInput
                      onChangeText={handleChange("email")}
                      value={values.email}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={styles.textInput}
                      placeholder={firstPlaceholderText}
                      placeholderTextColor="#808080"
                    />
                    {touched.email && errors.email && (
                      <Text
                        style={{
                          color: "red",
                          marginBottom: 5,
                          marginLeft: 5,
                          marginTop: -10,
                        }}
                      >
                        {errors.email}
                      </Text>
                    )}
                  </View>
                  <View>
                    <TextInput
                      onChangeText={handleChange("password")}
                      value={values.password}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={styles.textInput}
                      placeholder={secondPlaceholderText}
                      placeholderTextColor="#808080"
                      secureTextEntry
                    />
                    {touched.password && errors.password && (
                      <Text
                        style={{
                          color: "red",
                          marginBottom: 5,
                          marginLeft: 5,
                          marginTop: -10,
                        }}
                      >
                        {errors.password}
                      </Text>
                    )}
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.primaryButton}
                >
                  <Text style={styles.primaryButtonText}>{authButtonName}</Text>
                </TouchableOpacity>

                <Text style={styles.orText}>OR</Text>

                <BlurView intensity={100} style={styles.blurButton}>
                  <Button
                    title={secondButtonName}
                    color={"#fff"}
                    onPress={() => {}}
                  />
                </BlurView>
                {forgetPassword && (
                  <Link style={styles.forgotPasswordLink} href={"/netflix"}>
                    <Text style={styles.forgotPasswordText}>
                      {forgetPasswordText}
                    </Text>
                  </Link>
                )}
                <View style={styles.checkboxContainer}>
                  <Checkbox />
                  <Text style={styles.checkboxText}>{checkBoxName}</Text>
                </View>

                <View style={styles.signUpContainer}>
                  <Text style={styles.signUpPromptText}>
                    {newOrAlreadyUserText}
                  </Text>
                  <Link href={"/register"}>
                    <Text style={styles.signUpLinkText}>Sign Up Now</Text>
                  </Link>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  cardContainer: {
    backgroundColor: "transparent",
    borderRadius: 15,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 15, // For Android shadow
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 25,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  inputContainer: {
    flexDirection: "column",
    gap: 10,
  },
  textInput: {
    color: "#fff",
    backgroundColor: "rgba(45, 45, 45, 0.9)",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(128, 128, 128, 0.5)",
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: Colors.brand.primary[500],
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: Colors.brand.primary[500],
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  orText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 15,
    fontWeight: "500",
  },
  blurButton: {
    backgroundColor: "rgba(128, 128, 128, 0.3)",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  forgotPasswordLink: {
    marginVertical: 15,
  },
  forgotPasswordText: {
    color: "#ffffff",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 16,
    opacity: 0.9,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
    columnGap: 10,
  },
  checkboxText: {
    color: "#ffffff",
    fontSize: 16,
    opacity: 0.9,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    columnGap: 10,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  signUpPromptText: {
    color: "#ffffff",
    fontSize: 16,
    opacity: 0.9,
  },
  signUpLinkText: {
    color: Colors.brand.primary[500],
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default LoginRegisterCard;
