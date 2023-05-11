import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";

export default function App() {
  console.log("platform", Platform);
  return (
    // <View style={styles.container}>
    //   <Image
    //     style={styles.tinyLogo}
    //     source={require("./assets/fidelityLogo.png")}
    //   />
    // </View>
    <View style={styles.landingPageContainer}>
      <Image
        style={styles.landingImage}
        source={require("./assets/landingPageBoy.png")}
      />
      <Text style={styles.landingText}>Banking That Suits Your</Text>
      <Text style={styles.christmasFontText}>LifeStyle</Text>
      <TouchableOpacity style={styles.landingButton}>
        <Button
          title="Continue"
          color="#fff"
          backgroundColor="#20345E"
          onPress={() => alert("presseds")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20345E",
    alignItems: "center",
    justifyContent: "center",
    // display: Platform.OS === "android" ? "none" : "block"
  },
  landingPageContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: "3%",
    paddingVertical: "15%",
  },
  landingImage: {
    width: "100%",
  },
  landingButton: {
    width: "100%",
    border: "1px solid black",
    backgroundColor: "#20345E",
    borderRadius: "8px",
    paddingVertical: "2%",
  },
  landingText: {
    fontWeight: "bold",
    color: "#20345E",
    fontSize: "40px",
    margin: "5%",
  },
  christmasFontText: {
    color: "#78B945",
    weight: "400",
    fontSize: "96px",
    lineHeight: "96px",
  },
});
