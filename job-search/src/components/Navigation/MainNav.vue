<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-no-wrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Job Site</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="nav-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image
            v-if="isLoggedIn"
            data-test="profile-image"
            @click="LOGOUT_USER()"
          />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            data-test="login-button"
            @click="LOGIN_USER()"
          />
        </div>
      </div>
      <subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>
<script>
import { mapMutations, mapState } from "vuex";

import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";
import { LOGIN_USER, LOGOUT_USER } from "@/store";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/" },
        { text: "Locations", url: "/" },
        { text: "Life at Job Site", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/job/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapMutations([LOGIN_USER, LOGOUT_USER]),
  },
};
</script>
