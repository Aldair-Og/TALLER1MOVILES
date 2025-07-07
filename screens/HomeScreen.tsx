import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Catalogo Productos</Text>
      
      <View style={styles.cardContainer}>





        <TouchableOpacity style={[styles.card, styles.deleteCard]} onPress={()=> navigation.navigate("Catalogo") }>
          <Text style={styles.cardIcon}>👀</Text>
          <Text style={styles.cardTitle}>Productos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.deleteCard]} onPress={()=> navigation.navigate("AgregarProducto") }>
          <Text style={styles.cardIcon}>👀</Text>
          <Text style={styles.cardTitle}>Agregar</Text>
        </TouchableOpacity>


       

       
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    maxWidth: 400,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  createCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
  },
  readCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#2196F3',
  },
  updateCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#FFC107',
  },
  deleteCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#F44336',
  },
  cardIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    marginTop: 20,
    color: '#888',
    fontStyle: 'italic',
  },
});