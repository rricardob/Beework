import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {

  const navigation = useNavigation();

  const newAccountButton = () => {
    navigation.navigate('new-account-step-one');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('@/assets/images/partial-react-logo.png')} // Reemplaza con la ruta de tu logo
        style={styles.logo}
      />

      {/* Título y Subtítulo */}
      <Text style={styles.titulo}>Trabaja cuando quieras</Text>
      <Text style={styles.subtitulo}>y gana hasta S/. 50 la hora.</Text>

      {/* Botones de Inicio de Sesión */}
      <TouchableOpacity style={styles.botonGoogle}>
        <Text style={styles.textoBoton}>Continuar con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonApple}>
        <Text style={styles.textoBoton}>Continuar con Apple</Text>
      </TouchableOpacity>

      {/* Separador */}
      <Text style={styles.separador}>o</Text>

      {/* Botón de Crear Cuenta */}
      <TouchableOpacity style={styles.botonCrearCuenta} onPress={newAccountButton}>
        <Text style={styles.textoBotonCrearCuenta}>Crea una Cuenta</Text>
      </TouchableOpacity>

      {/* Texto de Términos y Condiciones */}
      <Text style={styles.terminos}>
        Al registrarte, aceptas nuestros Términos, Política de privacidad y Uso de cookies
      </Text>

      {/* Enlace de Inicio de Sesión */}
      <TouchableOpacity>
        <Text style={styles.enlaceInicioSesion}>¿Ya tienes una cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#FFFFFF', // Fondo blanco
    },
    logo: {
      width: 80, // Ajusta el tamaño del logo
      height: 80, // Ajusta el tamaño del logo
      marginBottom: 20,
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitulo: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    botonGoogle: {
      backgroundColor: '#EEEEEE', // Gris claro para Google
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 8,
      width: '100%',
      marginBottom: 10,
    },
    botonApple: {
      backgroundColor: '#EEEEEE', // Gris claro para Apple
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 8,
      width: '100%',
      marginBottom: 10,
    },
    textoBoton: {
      fontSize: 16,
      textAlign: 'center',
    },
    separador: {
      fontSize: 16,
      marginVertical: 10,
    },
    botonCrearCuenta: {
      backgroundColor: '#222222', // Negro para Crear Cuenta
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 8,
      width: '100%',
      marginBottom: 20,
    },
    textoBotonCrearCuenta: {
      color: '#FFFFFF', // Texto blanco
      fontSize: 16,
      textAlign: 'center',
    },
    terminos: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 10,
    },
    enlaceInicioSesion: {
      fontSize: 14,
      color: '#007AFF', // Azul para el enlace
      textAlign: 'center',
    },
  });

export default WelcomeScreen;