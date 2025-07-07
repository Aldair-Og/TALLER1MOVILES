import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/Config'



export default function GuardarScreen() {
  const [cedula, setcedula] = useState("")
  const [nombre, setnombre] = useState("")
  const [edad, setedad] = useState(0)
  const [correo, setcorreo] = useState("")

  async function guardar() {
      await setDoc(doc(db, "cities", cedula), {
      name: nombre,
      email: correo,
      age: edad,
      
    });
    //console.log("Document written with ID: ", docRef.id);



  }


  return (
    <View>
      <Text>Guardar</Text>
      <TextInput
        placeholder='Ingresar cedula'
        onChangeText={(texto) => setcedula(texto)}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar nombre'
        onChangeText={(texto) => setnombre(texto)}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar edad'
        onChangeText={(texto) => setedad(+texto)}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar correo'
        onChangeText={(texto) => setcorreo(texto)}
        style={styles.input}
      />
      <Button title='Guardar' onPress={() => guardar()} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 25,
    backgroundColor: "#9999",
    margin: 6,
    width: "80%"
  }
})