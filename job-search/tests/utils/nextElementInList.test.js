import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("locates and returns next element in array", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementInList(list, value);
    expect(result).toBe("D");
  });
});
