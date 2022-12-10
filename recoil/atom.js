import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
const timestamp = new Date().getTime();

export const countState = atom({
  key: "countState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const todoListState = atom({
  key: "todoListState",
  default: [
    { contents: "list 1", importance: "HIGH", status: "DONE" },
    { contents: "list 2", importance: "LOW", status: "DOING" },
    { contents: "list 3", importance: "MEDIUM", status: "DONE" },
    { contents: "list 4", importance: "HIGH", status: "HOLD" },
    { contents: "list 5", importance: "LOW", status: "DOING" },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const filterState = atom({
  key: "filterState",
  default: { importance: "", status: "" },
  effects_UNSTABLE: [persistAtom],
});

export const themeState = atom({
  key: "themeState",
  default: "Dark",
  effects_UNSTABLE: [persistAtom],
});
