<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        to="/"
        exact-active-class="no-active"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userStore.userLogedIn">
            <a @click.prevent="toggleAuth" class="px-2 text-white" href="#"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" to="/manage"
                >Manage</router-link
              >
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click="logOut">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import { mapWritableState } from "pinia";
import useModalStore from "@/stores/modalStore";
import useUserStore from "@/stores/user";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useModalStore, ["isOpen"]),
    ...mapStores(useUserStore),
  },
  methods: {
    toggleAuth() {
      this.isOpen = !this.isOpen;
    },
    async logOut() {
      await this.userStore.logOut();

      if (this.$route.name === "manage") {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
