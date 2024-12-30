import { Button, Text, View } from 'react-native';
import React from 'react';

export default function CountryScreen(navigation) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pasar a la pagina del mapa</Text>
            <Button
                title="Pulsa aqui."
                onPress={() => navigation.navigate('Map')}
            />
        </View>
    );
}

