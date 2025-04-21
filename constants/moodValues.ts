import { MoodType } from "@/types/Mood";

export const moodsText: { value: MoodType["mood"]; alt: string; icon: string }[] = [
  {
    value: 1,
    alt: "Very sad",
    icon: "😣",
  },
  {
    value: 2,
    alt: "Sad",
    icon: "😔",
  },
  {
    value: 3,
    alt: "Normal",
    icon: "🙁",
  },
  {
    value: 4,
    alt: "Happy",
    icon: "🙂",
  },
  {
    value: 5,
    alt: "Very happy",
    icon: "😄",
  },
];
