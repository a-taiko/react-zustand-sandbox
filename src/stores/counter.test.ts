import { useCounterStore } from "./counter";

test("reducers", () => {
  const { count } = useCounterStore.getState();
  expect(count).toEqual(0);
});
