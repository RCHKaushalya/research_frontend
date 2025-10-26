import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DashboardScreen() {
    const router = useRouter();

    const handleLogout = () => {
        router.replace('/');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>සාදරයෙන් පිළිගනිමු!</Text>
            <Text style={styles.subtitle}>ඔබගෙ සේවක පුවරුව</Text>

            <View style={styles.card}>
                <Text style={styles.label}>නම: රසිඳු අප්පුහමි</Text>
                <Text style={styles.label}>දුරකතන අංකය: 077123456</Text>
                <Text style={styles.label}>කාර්යය: පෙදරේරු සහයක</Text>
            </View>

            <Button title="ආපහු පිවිසෙන්න" onPress={handleLogout} />
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
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    },
    card: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20
    },
    label: {
        fontSize: 16,
        marginBottom: 5
    }
});