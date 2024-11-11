'use client';

import { useDirection } from '@/hooks/use-direction';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useLocalStorage } from 'react-use';

export function ThemeProvider({ children }: React.PropsWithChildren<object>) {
  const [direction] = useLocalStorage<string>('rytu-direction');
  const [themeColor] = useLocalStorage<string>('rytu-color');
  useDirection(direction ? direction : 'ltr');
  useThemeColor(themeColor ? themeColor : '#323743');
  // useThemeColor(themeColor ? themeColor : '#14161a');
  
  return (
    <NextThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
    >
      {children}
    </NextThemeProvider>
  );
}
