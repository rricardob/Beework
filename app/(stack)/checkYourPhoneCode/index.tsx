import {useState} from "react";
import {View, Text, TextInput, Pressable, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {router} from "expo-router";
import {Platform} from "react-native";

// Definimos la interfaz del formulario
// Definimos la interfaz del formulario
interface FormData {
    code: string; // Cambiado de "name" a "code" para coincidir con la verificación
}

const CheckYourPhoneCode = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState<FormData>({
        code: "",
    });

    // Función para actualizar los campos del formulario
    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Verifica si todos los campos están llenos
    const isFormValid = (): boolean => {
        return formData.code.trim() !== "";
    };

    // Verifica si el campo de código no está vacío
    const isCodeValid = (): boolean => {
        return formData.code.trim() !== "";
    };

    // Función para manejar la navegación cuando se presiona el ícono
    const handleIconPress = () => {
        if (isCodeValid()) {
            router.push("/(stack)/ressettingPassword");
        }
    };

    return (
        <View className="flex-1 justify-between p-4">
            {/* Contenedor del formulario */}
            <View className="items-center">
                {/* Avatar */}
                <View className="w-12 h-12 bg-gray-300 rounded-full mb-6"/>

                {/* Título */}
                <Text className="text-2xl mb-4 font-poppins-bold">
                    Check your phone
                </Text>

                {/* SubTítulo */}
                <Text className="text-1xl mb-4 font-poppins">
                    You’ll receive a code to verify here so you can reset your account password.
                </Text>

                {/* Inputs */}
                <View className="w-full flex-row items-center border border-gray-300 rounded-md px-4 py-3 mb-4">
                    <TextInput
                        className="flex-1 text-base"
                        placeholder="Enter your code"
                        placeholderTextColor="black"
                        value={formData.code}
                        onChangeText={(text) => handleInputChange("code", text)}
                    />
                    <TouchableOpacity
                        onPress={handleIconPress}
                        disabled={!isCodeValid()}
                    >
                        <Ionicons
                            name="arrow-forward-circle-outline"
                            size={28}
                            color={isCodeValid() ? "black" : "gray"}
                        />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
};

export default CheckYourPhoneCode;
