import { TrueSheetProvider } from '@lodev09/react-native-true-sheet';
import { Sheet } from '@lodev09/react-native-true-sheet/navigation/expo-router';

export const unstable_settings = { anchor: '(main)' };

export default function RootLayout() {
  return (
    <TrueSheetProvider>
      <Sheet>
        <Sheet.Screen name="(main)" />
        <Sheet.Screen name="sheet" options={{ detents: [0.5] }} />
      </Sheet>
    </TrueSheetProvider>
  );
}
