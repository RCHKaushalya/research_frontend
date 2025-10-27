import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterScreen() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [skill, setSkill] = useState("");
    const [location, setLocation] = useState("");
    const router = useRouter();

    const handleRegister = () => {
        alert('ලියාපදිංචි වීම සාර්ථකයි!');
        router.push('/');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>සේවක ලියාපදිංචිය</Text>

            <TextInput
                style={styles.input}
                placeholder="නම"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="දුරකතන අංකය"
                value={phone}
                onChangeText={setPhone}
            />

            <TextInput
                style={styles.input}
                placeholder="කාර්යය/ දක්ෂතාව"
                value={skill}
                onChangeText={setSkill}
            />

            <TextInput
                style={styles.input}
                placeholder="පදිංචි ප්‍රදේශය"
                value={location}
                onChangeText={setLocation}
            />

            <Button title="ලියාපදිංචි වන්න" onPress={handleRegister} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },

    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
    }
});