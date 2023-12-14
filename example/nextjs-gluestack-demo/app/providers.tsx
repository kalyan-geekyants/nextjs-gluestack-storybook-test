// app/providers.tsx
'use client';

import { GluestackUIProvider } from '@custom-ui/themed';
import { config } from '@custom-ui/config'; // Optional if you want to use default theme

export function Providers({ children }: { children: any }) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
}
