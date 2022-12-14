import { nextTick } from "vue";

import { mount } from "@vue/test-utils";

import Headline from "@/components/JobSearch/Headline";

describe("Headline", () => {
  it("displays introductory action verb", () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
    jest.useRealTimers();
  });

  it("changes action verb at a consistent interval", () => {
    jest.useFakeTimers("legacy");
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it("swaps action verb after first interval", async () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers(); //move forward to the next interval
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
    jest.useRealTimers();
  });
});
