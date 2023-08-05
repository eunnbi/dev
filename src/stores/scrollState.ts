import { create } from "zustand";

export interface ScrollState {
    scrollLeft: number;
}

export interface ScrollStore extends ScrollState {
    setScrollState: (state: ScrollState) => void;
}

export const useScrollStore = create<ScrollStore>(set => ({
    scrollLeft: 0,
    setScrollState: (state) => set(state)
}));
