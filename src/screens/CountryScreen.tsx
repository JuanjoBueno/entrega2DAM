import React from 'react';
import { View, Text, Button } from 'react-native';
import CountriesCard from '../components/CountriesCard';


type Props = {
    navigation: {
        navigate: (screen: string) => void;
    };
};

export default function HomeScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Ir a informacion adicional</Text>
            <CountriesCard></CountriesCard>
            <CountriesCard></CountriesCard>
            <Button
                title="Pulsa aquí"
                onPress={() => navigation.navigate("Map")}
                color="#007BFF"
            />
        </View>
    );
}


