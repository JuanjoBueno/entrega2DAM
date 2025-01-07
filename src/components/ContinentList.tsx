import { FlatList, Text, View } from "react-native";
import { Continent } from "../config/responses/dataCountries";


const continents: string[] = Object.values(Continent);

export default function ContinentList() {
    return (
        <View>
            <FlatList
                data={continents}
                keyExtractor={(item: string) => item}
                renderItem={({ item }: { item: string; }) => (
                    <View>
                        <Text>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
}

