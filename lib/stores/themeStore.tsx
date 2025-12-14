import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { create } from 'zustand';

interface ThemeStore {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  toggleDarkMode: () => void;
}

export const useTheme = create<ThemeStore>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (isDark) => set({ isDarkMode: isDark }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const setIsDarkMode = useTheme((state) => state.setIsDarkMode);

  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme, setIsDarkMode]);

  return <>{children}</>;
}
