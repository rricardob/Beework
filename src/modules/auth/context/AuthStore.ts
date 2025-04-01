import { create } from 'zustand';

// Definimos la interfaz para el estado
interface AuthStore {
  userName: string | null;
  setUserName: (name: string) => void;
}

// Creamos el store con Zustand
const useAuthStore = create<AuthStore>((set) => ({
  userName: null,
  setUserName: (name) => set({ userName: name }),
}));

// Hook personalizado para acceder al estado
export const useAuth = () => {
  const { userName, setUserName } = useAuthStore();
  return { userName, setUserName };
};
