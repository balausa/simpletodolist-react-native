import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';
export default function App() {

  const [listOfItems, setListOfItems] = useState([
    { text: 'купить молоко', key: '1' },
    { text: 'купить сыр', key: '2' },
    { text: 'купить масло', key: '3' },
    { text: 'купить машину', key: '4' },
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
    Alert.alert('Добавлена задача')
  }

  const deleteHandler = (key) => {
    Alert.alert(
      'Сообщение',
      'Вы действительно хотите удалить?',
      [
        {
          text: 'Да',
          onPress: () => setListOfItems((list) => {
            return list.filter(listOfItems => listOfItems.key != key)
          })
        },
        {
          text: 'Отмена',
          onPress: () => setListOfItems((list) => {
            return listOfItems
          })
        },

      ]
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    color: 'red'
  }
});
