import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CreateAccountStore {
  name: string | null;
  lastName: string | null;
  email: string | null;
  birthDate: Date | null;
  invitationToken: string | null;
  password: string | null;
  setPassword: (password: string) => void;
  setInvitationToken: (invitationToken: string) => void;
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setBirthDate: (birthDate: string) => void;
}

const useCreateAccountStore = create<CreateAccountStore>()(
  persist(
    (set) => ({
      name: null,
      lastName: null,
      email: null,
      birthDate: null,
      invitationToken: null,
      password: null,
      setPassword: (password) => set({ password }),
      setInvitationToken: (invitationToken) => set({ invitationToken }),
      setName: (name) => set({ name }),
      setLastName: (lastName) => set({ lastName }),
      setEmail: (email) => set({ email }),
      setBirthDate: (birthDate) => set({ birthDate: new Date(birthDate) }),
    }),
    {
      name: 'create-account-storage', // Nombre en AsyncStorage
      storage: {
        getItem: async (name) => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name) => {
          await AsyncStorage.removeItem(name);
        },
      },
    }
  )
);

export default useCreateAccountStore;
