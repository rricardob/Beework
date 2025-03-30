import { useState } from "react";
import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";
import { Platform } from "react-native";

// Definimos la interfaz del formulario
interface FormData {
    name: string
}

const FindYourTwitterAccount = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState<FormData>({
        name: "",
    });

    // Función para actualizar los campos del formulario
    const handleInputChange = (field: keyof FormData, value: string | Date) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Verifica si todos los campos están llenos
    const isFormValid = (): boolean => {
        return formData.name.trim() !== "";
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-white"
        >

            <View className="flex-1 justify-between p-4">
                {/* Contenedor del formulario */}
                <View className="items-center">
                    {/* Avatar */}
                    <View className="w-12 h-12 bg-gray-300 rounded-full mb-6" />

                    {/* Título */}
                    <Text className="text-2xl mb-4 font-poppins-bold">
                        Find your Twitter account
                    </Text>

                    {/* Inputs */}
                    <View className="w-full flex-row items-center border border-gray-300 rounded-md px-4 py-3 mb-4">
                        <TextInput
                            className="flex-1 text-base"
                            placeholder="Phone, email or username"
                            placeholderTextColor="black"
                            value={formData.name}
                            onChangeText={(text) => handleInputChange("name", text)}
                        />
                        <Ionicons name="arrow-forward-circle-outline" size={22} color="black" />
                    </View>

                </View>

                {/* Contenedor del botón */}
                <View className="justify-end items-end mb-40 mr-4">
                    <Pressable
                        className={`py-3 px-6 rounded-lg text-base ${isFormValid() ? "bg-black" : "bg-gray-400"
                            }`}
                        onPress={() => {
                            router.push("/(stack)/chooseResetPassword");
                        }}
                        disabled={!isFormValid()}
                    >
                        <Text className="text-white font-semibold text-[18px] text-center">
                            Search
                        </Text>
                    </Pressable>
                </View>
            </View>

        </KeyboardAvoidingView>
    );
};

export default FindYourTwitterAccount;
