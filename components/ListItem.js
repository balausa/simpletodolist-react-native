import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 15,
        fontSize: 18,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        marginHorizontal:10,
        textAlign: 'center'
    }
});