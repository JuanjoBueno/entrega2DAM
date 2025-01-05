import React from 'react';
import { View, Text, Button } from 'react-native';

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
                onPress={() => navigation.popToTop()}
                color="#007BFF"
            />
        </View>
    );
}


