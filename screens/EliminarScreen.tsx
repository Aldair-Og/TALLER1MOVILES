import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/Config';


export default function EliminarScreen() {

  const [cedula, setcedula] = useState("")

  async function eliminar() {

    await deleteDoc(doc(db, "cities", cedula));


  }

  return (
    <View>
      <Text>Eliminar</Text>

      <TextInput
        placeholder='Cedula'
        onChangeText={(texto) => setcedula(texto)}
      />

      <Button title='Eliminar' color={'red'} onPress={() => eliminar()} />
    </View>
  )
}

const styles = StyleSheet.create({})