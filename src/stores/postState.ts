import { create } from "zustand";

export interface PostMetadataState {
    title: string;
    category: string;
    date: string;
    emoji: string;
}

export interface PostMetadataStore extends PostMetadataState {
    setPostMetadata: (state: PostMetadataState) => void;
}

export const usePostMetadataStore = create<PostMetadataStore>(set => ({
    title: '',
    category: '',
    date: '',
    emoji: '',
    setPostMetadata: (state) => set(state)
}));
