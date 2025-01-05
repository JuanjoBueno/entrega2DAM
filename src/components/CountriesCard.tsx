import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CountriesCard() {
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>Header</Text>
            </View>
            <View>
                <Text style={styles.content}>contenidos</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    },
    content: {
        fontSize: 14,
        color: '#444444',
        textAlign: 'left',
    },
});