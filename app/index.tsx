import DayComponent from "@/components/DayComponent";
import { StyleSheet, View } from "react-native";
import { CalendarList } from "react-native-calendars";

export default function Index() {
  const currentDate = new Date();

  return (
    <View style={styles.container}>
      <CalendarList
        style={styles.calendar}
        futureScrollRange={0}
        maxDate={currentDate.toDateString()}
        dayComponent={DayComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  calendar: {
    width: "100%",
    flex: 1,
  },
});
