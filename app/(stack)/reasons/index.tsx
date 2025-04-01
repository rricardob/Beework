import React, { useMemo, useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

// Definimos la interfaz del formulario
interface FormData {
    name: string
}

const ReasonsScreen = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState<FormData>({
        name: "",
    });

    const radioButtonsData = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'I forgot my password',
            value: 'email',
            labelStyle: styles.radioLabel,
            containerStyle: styles.radioContainer,
        },
        {
            id: '2',
            label: 'There was suspicious activity on my account',
            value: 'phone',
            labelStyle: styles.radioLabel,
            containerStyle: styles.radioContainer,
        },
        {
            id: '3',
            label: 'I changed my password for a different reason',
            value: 'phone',
            labelStyle: styles.radioLabel,
            containerStyle: styles.radioContainer,
        }
    ]), []);

    const [selectedId, setSelectedId] = useState('2');

    const handleSelect = (selectedButton: any) => {
        setSelectedId(selectedButton.id);
        console.log('Selected ID:', selectedButton.id); // Verifica si se llama y con qué ID
    };

    // Función para actualizar los campos del formulario
    const handleInputChange = (field: keyof FormData, value: string | Date) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Verifica si todos los campos están llenos
    const isFormValid = (): boolean => {
        return formData.name.trim() !== "";
    };

    return (

        <View className="flex-1 justify-between p-4">
            {/* Contenedor del formulario */}
            <View className="items-center">
                {/* Avatar */}
                <View className="w-12 h-12 bg-gray-300 rounded-full mb-6" />

                {/* Título */}
                <Text className="text-3xl mb-4 font-poppins-bold">
                    Why’d you change your password?
                </Text>

                {/* Descripción */}
                <Text className="text-base text-gray-600 mb-8 font-poppins">
                  Your feedback helps us understand when and why people need to change their passwords.
                </Text>

                {/* Inputs */}
                <View style={styles.container}>
                    <RadioGroup
                        radioButtons={radioButtonsData}
                        onPress={setSelectedId}
                        selectedId={selectedId}
                        layout="column"
                    />
                </View>

            </View>

            {/* Contenedor del botón */}
            <View className="w-full">
                <Pressable
                    className={`py-3 px-6 rounded-lg text-base bg-black`}
                    onPress={() => {
                        router.push("/(stack)/passwordChanged");
                    }}
                >
                    <Text className="text-white font-semibold text-[18px] text-center">
                        Next
                    </Text>
                </Pressable>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    radioLabel: {
        fontSize: 16,
        color: '#333',
        marginRight: 8, // Cambiamos marginLeft por marginRight
        flex: 1, // Para que el texto ocupe todo el espacio disponible
    },
    radioContainer: {
        flexDirection: 'row-reverse', // Esto invierte el orden (botón a la derecha)
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        width: '100%',
    },
});

export default ReasonsScreen;
