import { mount } from "@vue/test-utils";

import ActionButton from "@/components/Shared/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Example Text",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Example Text");
  });

  it("applies one of many styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
