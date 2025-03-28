import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { router } from "expo-router";

const CodeVerificationScreen = () => {
  const [code, setCode] = useState(Array(6).fill(""));

  // Manejar la entrada de código
  const handleChange = (text: string, index: number) => {
    if (/^\d?$/.test(text)) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
    }
  };

  // Verificar si todos los cuadros tienen un número
  const isCodeComplete = code.every((num) => num !== "");

  return (
    <View className="flex-1 justify-between p-4 font-poppins-regular">
      {/* Contenedor Superior */}
      <View className="flex-grow items-center">
        {/* Avatar */}
        <View className="w-16 h-16 bg-gray-300 rounded-full mb-6" />

        {/* Título */}
        <Text className="text-2xl mb-2 font-poppins-bold text-center">
          We sent you a code
        </Text>

        {/* Subtítulo */}
        <Text className="text-base text-black-600 mb-6 mt-8 font-poppins-regular text-center">
          Enter it to verify jon.doe@gmail.com
        </Text>

        {/* Código de verificación */}
        <View className="flex-row justify-between mb-6 w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <TextInput
              key={index}
              className="w-14 h-24 border border-gray-300 text-center text-6xl font-poppins-light rounded-md p-0"
              keyboardType="numeric"
              maxLength={1}
              value={code[index]}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>
      </View>

      {/* Contenedor Inferior */}
      <View className="mb-6">
        {/* Reenviar código */}
        <Text className="text-base text-black-500 font-poppins-regular text-left mb-4">
          Didn’t receive mail?
        </Text>

        {/* Botón Next */}
        <Pressable
          className={`w-full py-3 rounded-lg items-center ${isCodeComplete ? "bg-black" : "bg-gray-400"
            }`}
          disabled={!isCodeComplete}
          onPress={() => router.push("/createPassword")}
        >
          <Text className="text-white font-semibold text-lg">Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CodeVerificationScreen;
