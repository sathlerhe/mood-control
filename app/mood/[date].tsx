import { moodsText } from "@/constants/moodValues";
import { useMoodContext } from "@/context/MoodContext";
import { MoodType } from "@/types/Mood";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

export default function Mood() {
  const { date } = useLocalSearchParams();
  const { moods, upsertMood } = useMoodContext();
  const [noteValue, setNoteValue] = useState("");
  const [moodValue, setMoodValue] = useState<MoodType["mood"]>();

  if (!date || typeof date !== "string") return;

  useEffect(() => {
    if (!moods) return;
    const selectedDateMood = moods[date];
    if (selectedDateMood) {
      setNoteValue(selectedDateMood.note ?? "");
      setMoodValue(selectedDateMood.mood);
    }
  }, [date]);

  function changeMood(value: MoodType["mood"]) {
    setMoodValue(value);
    upsertMood(date as string, { mood: value, note: noteValue });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>
        {Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(
          new Date(date as string),
        )}
      </Text>

      <View style={styles.moodList}>
        {moodsText.map((moodText) => (
          <TouchableHighlight
            key={moodText.value}
            onPress={() => changeMood(moodText.value)}
          >
            <Text
              style={
                moodValue === moodText.value
                  ? styles.buttonTextSelected
                  : styles.buttonText
              }
            >
              {moodText.icon}
            </Text>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  button: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 32,
  },
  buttonTextSelected: {
    fontSize: 52,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    textAlign: "center",
    marginTop: 12,
  },
  moodList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
