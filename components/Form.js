import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function Form({ addHandler }) {

    const [text, setText] = useState('');
    const onChange = (value) => {
        setText(value);
    };

    return (
        <View>
            <TextInput style={styles.input}
                onChangeText={onChange}
                placeholder='Создайте задачу' />
            <Pressable style={styles.button}
                onPress={() => addHandler(text)}>
                <Text style={styles.text}>Создать</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: 40,
        width: '80%'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        marginHorizontal:30,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 18,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: 'white',
    },
});