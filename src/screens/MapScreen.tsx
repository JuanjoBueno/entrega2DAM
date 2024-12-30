import { Button, Text, View } from 'react-native';
import React from 'react';

export default function MapScreen(navigation) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MapScreen</Text>
            <Button
                title="pulsa para volver a home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

