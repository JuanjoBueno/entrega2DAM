import { FlatList, StyleSheet, Text, View } from "react-native";
import { Continent } from "../config/responses/dataCountries";


const continents: string[] = Object.values(Continent);

export function ContinentList() {
    return (
        <View style={styles.container}>
            <Text>Hola</Text>
            <FlatList
                data={continents}
                keyExtractor={(item: string) => item}
                renderItem={({ item }: { item: string; }) => (
                    <View style={styles.card}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});