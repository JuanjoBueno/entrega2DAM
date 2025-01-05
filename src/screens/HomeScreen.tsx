import React from 'react';
import { View, Text, Button } from 'react-native';
import { ContinentList } from '../components/ContinentList';

type Props = {
    navigation: {
        navigate: (screen: string) => void;
    };
};

export default function HomeScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Pasar a la pantalla de los países</Text>
            <Button
                title="Pulsa aquí"
                onPress={() => navigation.navigate("Country")}
                color="#007BFF"
            />
            <ContinentList></ContinentList>
        </View>
    );
}

