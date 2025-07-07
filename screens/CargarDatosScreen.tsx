import { Button, View, Alert, StyleSheet } from 'react-native'
import React from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/Config'

export default function CargarProductosScreen() {

  async function cargarProductos() {
    const productos = [
      {
        nombre: "Combo KFC Doritos",
        precio: 13.99,
        imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/KFC_Bucket.jpg/640px-KFC_Bucket.jpg",
        descripcion: "2 sandwiches Kentucky Doritos + 4 alitas picantes + papas + Pepsi"
      },
      {
        nombre: "Twister Doritos",
        precio: 12.99,
        imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/KFC_meal.jpg/640px-KFC_meal.jpg",
        descripcion: "2 Twister Doritos + 2 presas de pollo + papas + Pepsi"
      },
      {
        nombre: "Bucket Familiar",
        precio: 20.50,
        imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/KFC_Bucket_meal.jpg/640px-KFC_Bucket_meal.jpg",
        descripcion: "8 presas de pollo + papas grandes + 4 Pepsi"
      }
    ]

    for (let producto of productos) {
      await addDoc(collection(db, "productos"), producto)
    }

    Alert.alert("Éxito", "Productos cargados en Firestore correctamente")
  }

  return (
    <View style={styles.container}>
      <Button title="Cargar productos iniciales" onPress={cargarProductos} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' }
})
