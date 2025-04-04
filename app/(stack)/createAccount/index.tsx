import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import useCreateAccountStore from "@/src/modules/auth/context/CreateAccountStore";

const CreateAccountScreen = () => {
  // Obtenemos los datos y funciones del store
  const { name, lastName, email, setName, setLastName, setEmail } = useCreateAccountStore();

  // Estado para la fecha de nacimiento
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Función para manejar el cambio de fecha
  const handleDateChange = (_event: unknown, selectedDate?: Date): void => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthdate(selectedDate);
    }
  };

  // Función para formatear la fecha en DD/MM/YYYY
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Verifica si todos los campos están llenos
  const isFormValid = () => {
    return (name?.trim() ?? "") !== "" && (email?.trim() ?? "") !== "";
  };

  return (
    <View className="flex-1 justify-between p-4">
      {/* Contenedor del formulario */}
      <View className="items-center">
        {/* Avatar */}
        <View className="w-12 h-12 bg-gray-300 rounded-full mb-6" />

        {/* Título */}
        <Text className="text-2xl mb-4 font-poppins-bold">Crea tu cuenta</Text>

        {/* Inputs */}
        <View className="w-full flex-row items-center border border-gray-300 rounded-md px-4 py-3 mb-4">
          <TextInput
            className="flex-1 text-base"
            placeholder="Nombre"
            value={name ?? ""}
            onChangeText={setName}
          />
          {name?.trim() !== "" && <Ionicons name="checkmark-circle" size={24} color="black" />}
        </View>

        <View className="w-full flex-row items-center border border-gray-300 rounded-md px-4 py-3 mb-4">
          <TextInput
            className="flex-1 text-base"
            placeholder="Apellidos"
            value={lastName ?? ""}
            onChangeText={setLastName}
          />
          {lastName?.trim() !== "" && <Ionicons name="checkmark-circle" size={24} color="black" />}
        </View>

        <View className="w-full flex-row items-center border border-gray-300 rounded-md px-4 py-3 mb-4">
          <TextInput
            className="flex-1 text-base"
            placeholder="Número de teléfono o correo electrónico"
            keyboardType="email-address"
            value={email ?? ""}
            onChangeText={setEmail}
          />
          {email?.trim() !== "" && <Ionicons name="checkmark-circle" size={24} color="black" />}
        </View>

        {/* Input de fecha de nacimiento */}
        <Pressable
          className="w-full flex-row justify-between border border-gray-300 rounded-lg px-4 py-3 mb-4"
          onPress={() => setShowDatePicker(true)}
        >
          <Text className={birthdate ? "text-black" : "text-gray-400"}>
            {formatDate(birthdate)}
          </Text>
          <Ionicons name="calendar" size={24} color="black" />
        </Pressable>

        {/* DateTimePicker */}
        {showDatePicker && (
          <DateTimePicker
            value={birthdate}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
          />
        )}
      </View>

      {/* Contenedor del botón */}
      <View className="w-full">
        <Pressable
          className={`py-3 px-6 rounded-lg text-base ${isFormValid() ? "bg-black" : "bg-gray-400"}`}
          onPress={() => {
            router.push("/(stack)/customizeCreateAccount");
            console.log({ name, lastName, email, birthdate: formatDate(birthdate) });
          }}
          disabled={!isFormValid()}
        >
          <Text className="text-white font-semibold text-[18px] text-center">Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateAccountScreen;
