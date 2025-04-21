import { MoodProvider } from "@/context/MoodContext";
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <MoodProvider>
      <Slot />
    </MoodProvider>
  );
}
