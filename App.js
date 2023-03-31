import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";

export default function App() {
  const [text, onChangeText] = useState("");
  const handleChange = (e) => {
    onChangeText(e.target.value);
  };
  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} />
      <Text style={styles.customTitle}>Set up your profile</Text>
      <Text style={styles.customText} numberOfLines={3}>
        To create a unique experience for you, enter your details below
      </Text>

      {/* <Form></Form> */}

      <Text>Full name</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={text}
        placeholder="Fullname"
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={text}
        placeholder="Email"
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={text}
        placeholder="Password"
        // keyboardType="numeric"
      />

      <Text>Confirm password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={text}
        placeholder="Confirm password"
        // keyboardType="numeric"
      />

      <Button
        style={styles.CustomButton}
        title="Sign up"
        color="#FF76BA"
        onPress={() => Alert.alert("Button pressed")}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  customTitle: {
    fontWeight: "600",
    marginTop: 15,
  },
  customText: {
    fontSize: "14px",
    paddingVertical: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 5,
  },
  CustomButton: {
    backgroundColor: "pink",
    border: "2px solid yellow",
  },
});
