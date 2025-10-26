import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
    const [phone, setPhone] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        router.push('/otp');
    };

    return (
        <View style={style.container}>
            <Text style={style.label}>දුරකතන අංකය:</Text>
            <TextInput
                style={style.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="07XXXXXXXX"
                keyboardType="phone-pad"
            />
            <Button title="OTP යවන්න" onPress={handleLogin}/>
            <Text style={style.link} onPress={() => router.push('/register')}>නව සේවකයෙක්ද? ලියාපදිංචි වන්න</Text>
        </View>
    );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  }
});