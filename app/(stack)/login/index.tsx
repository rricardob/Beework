import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";
import { useAuth } from "../../../src/modules/auth/context/AuthStore";
import { SaveUserNameUseCase } from "../../../src/modules/auth/usecases/SaveUserNameUseCase";
import { AuthRepositoryImpl } from "../../../src/modules/auth/infrastructure/AuthRepositoryImpl";

const authRepository = new AuthRepositoryImpl();
const saveUserNameUseCase = new SaveUserNameUseCase(authRepository);

const LoginScreen = () => {
  const { setUserName } = useAuth();
  const [name, setName] = useState("");

  const handleNext = () => {
    saveUserNameUseCase.execute(name);
    setUserName(name);
    router.push("/(stack)/enterYourPassword");
  };

  return (
    <View className="flex-1 justify-between p-4">
      <View className="items-center">
        <View className="w-12 h-12 bg-gray-300 rounded-full mb-6" />
        <Text className="text-2xl mb-4 font-poppins-bold">
          To get started, first enter your phone, email, or @username
        </Text>

        <View className="w-full flex-row items-center border border-gray-300 rounded-md px-4 py-3 mb-4">
          <TextInput
            className="flex-1 text-base"
            placeholder="Phone, email or @username"
            value={name}
            onChangeText={setName}
          />
          {name.trim() !== "" && (
            <Ionicons name="arrow-forward-circle-outline" size={24} color="gray" />
          )}
        </View>
      </View>

      <View className="flex-row justify-between mb-6 w-full items-center">
        <Pressable className="text-left" onPress={() => router.push("/(stack)/findYourTwitterAccount")}>
          <Text className="text-black">Forgot password?</Text>
        </Pressable>

        <Pressable
          className={`py-3 px-6 text-right rounded-lg text-base ${name.trim() !== "" ? "bg-black" : "bg-gray-400"}`}
          onPress={handleNext}
          disabled={name.trim() === ""}
        >
          <Text className="text-white font-semibold text-[18px] text-center">Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
