<template>
  <!-- Header -->
  <app-Header></app-Header>

  <RouterView />

  <!-- Player -->
  <div class="fixed bottom-0 left-0 bg-white px-4 py-2 w-full">
    <!-- Track Info -->
    <div class="text-center">
      <span class="song-title font-bold">Song Title</span> by
      <span class="song-artist">Artist</span>
    </div>
    <div class="flex flex-nowrap gap-4 items-center">
      <!-- Play/Pause Button -->
      <button type="button">
        <i class="fa fa-play text-gray-500 text-xl"></i>
      </button>
      <!-- Current Position -->
      <div class="player-currenttime">00:00</div>
      <!-- Scrub Container  -->
      <div class="w-full h-2 rounded bg-gray-200 relative cursor-pointer">
        <!-- Player Ball -->
        <span
          class="absolute -top-2.5 -ml-2.5 text-gray-800 text-lg"
          style="left: 50%"
        >
          <i class="fas fa-circle"></i>
        </span>
        <!-- Player Progress Bar-->
        <span
          class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
          style="width: 50%"
        ></span>
      </div>
      <!-- Duration -->
      <div class="player-duration">03:06</div>
    </div>
  </div>

  <!-- Auth Modal -->
  <app-Auth></app-Auth>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppAuth from "@/components/AppAuth.vue";
import useUserStore from "@/stores/user";

import { mapStores } from "pinia";
import { auth } from "./includes/firebase";

export default {
  components: {
    AppHeader,
    AppAuth,
  },
  data() {
    return {};
  },
  computed: {
    ...mapStores(useUserStore),
  },
  created() {
    if (auth.currentUser) {
      this.userStore.userLogedIn = true;
      console.log(this.userStore.userLogedIn);
    } else {
      console.log("you are not loged in");
    }
  },
};
</script>
