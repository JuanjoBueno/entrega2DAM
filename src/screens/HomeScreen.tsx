import { Button, Text, View } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pasar a la pantalla de los paises</Text>
            <Button
                title="Pulsa aqui."
                onPress={() => navigation.navigate('Country')}
            />
        </View>
    );
}