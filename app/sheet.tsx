import { Link } from 'expo-router';
import { View } from 'react-native';

// Details is a screen of the base stack, under the sheet.
export default function SheetScreen() {
  return (
    <View style={{ padding: 24, gap: 24 }}>
      <Link href="/details">Go to details</Link>
      <Link href="/details" push>
        Push details
      </Link>
    </View>
  );
}
