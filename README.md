# TrueSheet: a link from a sheet to the base screen pushes the base screen again as a sheet

Expo Router 58, `@lodev09/react-native-true-sheet` 4.0.0-beta.28.

```sh
npm install
npx expo run:ios
```

1. Tap **Open the sheet**.
2. In the sheet, tap **Go to details** (`/details`, a screen of the `(main)` stack under the sheet).

**Expected:** the sheet is dismissed and Details is pushed in `(main)`.

**Actual:** the screen stays dimmed. The navigator state is `[(main), sheet, (main)]`: a second `(main)` is pushed, as a sheet, with Details in it.
