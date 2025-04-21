import { moodsText } from "@/constants/moodValues";
import { useMoodContext } from "@/context/MoodContext";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { DateData } from "react-native-calendars";
import { DayProps } from "react-native-calendars/src/calendar/day";

const dayColorByState = {
  today: "deepskyblue",
  disabled: "gray",
  _: "black",
};

export default function DayComponent({
  date,
  state,
}: DayProps & {
  date?: DateData;
}) {
  const { moods } = useMoodContext();

  return (
    <TouchableOpacity
      onPress={() =>
        state === "disabled" ? null : router.push(`/mood/${date?.dateString}`)
      }
    >
      <View>
        <Text
          style={{
            textAlign: "center",
            color: dayColorByState[state as keyof typeof dayColorByState],
          }}
        >
          {date?.day}
        </Text>
        {date?.dateString && moods[date?.dateString]?.mood && (
          <Text style={{ textAlign: "center" }}>
            {moodsText[moods[date.dateString].mood - 1]?.icon}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
