import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function NewAccountScreenStepOne() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [telefonoEmail, setTelefonoEmail] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleNextButton = () => {
    // Aquí puedes agregar la lógica para el botón "Next"
    console.log('Nombre:', nombre);
    console.log('Número de teléfono o correo electrónico:', telefonoEmail);
    console.log('Fecha de nacimiento:', fechaNacimiento);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* Barra de navegación */}
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={handleBackButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Crea tu cuenta</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Número de teléfono o correo electrónico"
          value={telefonoEmail}
          onChangeText={setTelefonoEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Fecha de nacimiento"
          value={fechaNacimiento}
          onChangeText={setFechaNacimiento}
        />
      </View>

      {/* Botón "Next" */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigationBar: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  nextButton: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});