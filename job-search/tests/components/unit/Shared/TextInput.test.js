import { mount } from "@vue/test-utils";

import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
  it("comms user has entered a character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    //console.log(wrapper.emitted());
    input.setValue("Hello");
    input.setValue(", Nurse!");
    //console.log(wrapper.emitted());
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["Hello"], [", Nurse!"]]);
  });
});
