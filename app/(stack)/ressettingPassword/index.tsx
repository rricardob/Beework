import {useState} from "react";
import {View, Text, TextInput, Pressable, KeyboardAvoidingView} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {router} from "expo-router";
import {Platform} from "react-native";

// Definimos la interfaz del formulario
interface FormData {
  password: string;
  confirmPassword: string;
}

const RessetingPassword = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState<FormData>({
      password: "",
      confirmPassword: "",
    });

    // Función para actualizar los campos del formulario
    const handleInputChange = (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Verifica si todos los campos están llenos y coinciden
    const isFormValid = (): boolean => {
      return (
        formData.password.trim() !== "" &&
        formData.confirmPassword.trim() !== "" &&
        formData.password === formData.confirmPassword
      );
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1 bg-white"
            keyboardVerticalOffset={100}
          >
            <View className="flex-1 justify-between p-6">
              {/* Contenedor del formulario */}
              <View>
                {/* Título */}
                <Text className="text-3xl font-bold mb-6">Reset your password</Text>

                {/* Descripción */}
                <Text className="text-base text-gray-600 mb-8">
                  Strong passwords include numbers, letters and punctuation marks.
                </Text>
                <Text className="text-base text-gray-600 mb-8">
                  Resetting your password will log you out of all your active sessions.{" "}
                  <Text className="text-blue-500">Learn more</Text>
                </Text>

                {/* Campo de nueva contraseña */}
                <View className="mb-6">
                  <Text className="text-base font-semibold mb-2">
                    Enter your new password
                  </Text>
                  <TextInput
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-base"
                    placeholder="New password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                    value={formData.password}
                    onChangeText={(text) => handleInputChange("password", text)}
                  />
                </View>

                {/* Campo de confirmación de contraseña */}
                <View className="mb-6">
                  <Text className="text-base font-semibold mb-2">
                    Enter your password one more time
                  </Text>
                  <TextInput
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-base"
                    placeholder="Confirm password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                    value={formData.confirmPassword}
                    onChangeText={(text) => handleInputChange("confirmPassword", text)}
                  />
                </View>

                {/* Línea divisoria */}
                <View className="border-t border-gray-200 my-4" />
              </View>

              {/* Contenedor del botón */}
              <View className="mb-4">
                <Pressable
                  className={`w-full py-3 rounded-full ${isFormValid() ? "bg-black" : "bg-gray-300"}`}
                  onPress={() => {
                    // Lógica para resetear la contraseña
                    router.back();
                  }}
                  disabled={!isFormValid()}
                >
                  <Text className="text-white font-semibold text-center text-base">
                    Reset password
                  </Text>
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
    );
};

export default RessetingPassword;
