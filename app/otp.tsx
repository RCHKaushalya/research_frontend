import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function OTPScreen() {
    const [otp, setOtp] = useState("");
    const router = useRouter();

    const handleVerify = () => {
        router.push('/dashboard');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>OTP අංකය ඇතුලත් කරන්න</Text>
            <TextInput
                style={styles.input}
                value={otp}
                onChangeText={setOtp}
                placeholder="123456"
                keyboardType="number-pad"
            />
            <Button title="සත්‍යාපනය කරන්න" onPress={handleVerify}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    }
});