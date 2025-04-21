import { MoodListType, MoodType } from "@/types/Mood";
import { createContext, ReactNode, useContext, useState } from "react";

interface IMoodContext {
  moods: MoodListType;
  upsertMood: (date: string, mood: MoodType) => void;
}
export const MoodContext = createContext({} as IMoodContext);

export function MoodProvider({ children }: { children: ReactNode }) {
  const [moods, setMoods] = useState<MoodListType>({});

  function upsertMood(date: string, mood: MoodType) {
    setMoods((prev) => ({
      ...prev,
      [date]: mood,
    }));
  }

  return (
    <MoodContext.Provider value={{ moods, upsertMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export const useMoodContext = () => {
  const { moods, upsertMood } = useContext(MoodContext);

  return { moods, upsertMood };
};
