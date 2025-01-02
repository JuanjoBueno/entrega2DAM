import React from 'react';
import { View, Text, Button } from 'react-native';
import commonStyles from '../styles';

type Props = {
    navigation: {
        navigate: (screen: string) => void;
    };
};

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.titleText}>Pasar a la pantalla de los países</Text>
            <Button
                title="Pulsa aquí"
                onPress={() => navigation.navigate("Country")}
                color="#007BFF"
            />
        </View>
    );
}

