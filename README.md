# TrueSheet: a push from a sheet to the base screen pushes the base screen again as a sheet

Expo Router 58, `@lodev09/react-native-true-sheet` built from `main` at 1e09059, which includes #952
(`vendor/react-native-true-sheet-1e09059.tgz`, `npm pack` of that commit: #952 isn't released yet).

```sh
npm install
npx expo run:ios
```

1. Tap **Open the sheet**.
2. In the sheet, tap **Go to details** (`/details`, a screen of the `(main)` stack under the sheet): the sheet is
   dismissed and Details is pushed in `(main)`, fixed by #952.
3. Open the sheet again, and tap **Push details** (the same link with `push`, as `router.push('/details')`).

**Expected:** the same as **Go to details**.

**Actual** (iOS 27.0): the sheet disappears and the home screen stays dimmed, without Details, and no longer
responds. #952 only handles a `NAVIGATE`: the `PUSH` of `(main)` from the sheet still pushes a second `(main)`, with
Details in it, presented as a sheet off screen (only its grabber shows at the bottom).
