import { countState, filterState, todoListState } from "@/recoil/atom";
import { selector } from "recoil";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filter = get(filterState);
    return todoList.filter((item) => {
      if (filter.importance && filter.importance !== item.importance) {
        return false;
      }
      if (filter.status && filter.status !== item.status) {
        return false;
      }
      return true;
    });
  },
});
