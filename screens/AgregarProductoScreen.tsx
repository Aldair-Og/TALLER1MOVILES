import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/Config'

export default function AgregarProductoScreen({ navigation }: any) {


  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState("")
  const [imagenUrl, setImagenUrl] = useState("")
  const [descripcion, setDescripcion] = useState("")

  async function guardarProducto() {
    await addDoc(collection(db, "productos"), {
      nombre, precio: parseFloat(precio), imagenUrl, descripcion
    })
    Alert.alert("Guardado", "Producto guardado correctamente")
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agregar Producto</Text>
      <TextInput placeholder='Nombre' onChangeText={setNombre} style={styles.input} />
      <TextInput placeholder='Precio' onChangeText={setPrecio} keyboardType="numeric" style={styles.input} />
      <TextInput placeholder='Imagen URL' onChangeText={setImagenUrl} style={styles.input} />
      <TextInput placeholder='Descripción' onChangeText={setDescripcion} style={styles.input} />
      <Button title='Guardar' onPress={guardarProducto} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 28, textAlign: 'center', marginBottom: 20 },
  input: { fontSize: 20, backgroundColor: "#ddd", marginVertical: 8, padding: 10, borderRadius: 8 }
})
