import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/Config';


export default function LeerScreen() {

  const [datos, setdatos] = useState([])


  async function leer() {
    let arreglo: any = []
    const querySnapshot = await getDocs(collection(db, "cities"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      //arreglo.push(doc.data())
      arreglo.push({
        cedula: doc.id, ...doc.data()
      })
    });

    setdatos(arreglo)


  }


  useEffect(() => {
    leer()
    console.log(datos); 
  }, [])

  type Usuario = {
    cedula: String,
    name: String,
    age: number,
    email: String
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Usuarios</Text>
      <FlatList
        data={datos}
        renderItem={({ item }: { item: Usuario }) =>
          <View style={styles.card}>
            <Text style={styles.texto}>Nombre: {item.name}</Text>
            <Text style={styles.texto}>Edad: {item.age}</Text>
            <Text style={styles.texto}>Cédula: {item.cedula}</Text>
          </View>
        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d527ec',
    padding: 20
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#b39f09',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10
  },
  texto: {
    fontSize: 18,
    color: 'white'
  }
})