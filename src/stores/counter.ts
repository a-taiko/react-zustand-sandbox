import { create } from "zustand";
import { devtools } from "zustand/middleware";

type counterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<counterState>()(
  devtools((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }))
);
