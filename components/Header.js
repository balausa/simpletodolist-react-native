import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 20,
        height: 50,
        backgroundColor: 'silver'
    },
    text: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});