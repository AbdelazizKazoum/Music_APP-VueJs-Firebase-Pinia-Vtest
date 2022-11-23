<template>
  <!-- Login Form -->
  <div
    class="text-white p-4 rounded mb-4"
    :class="log_alert_variant"
    v-if="log_show_alert"
  >
    {{ log_alert_msg }}
  </div>
  <vee-form :validation-schema="schema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
        name="email"
      />
      <ErrorMessage name="email" class="text-red-500" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
        name="password"
      />
      <ErrorMessage name="password" class="text-red-600" />
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      :disabled="log_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
import { mapActions } from "pinia";
import useUserStore from "@/stores/user";
import { mapState } from "pinia";
export default {
  data() {
    return {
      log_in_submission: false,
      log_show_alert: false,
      log_alert_variant: "bg-blue-500",
      log_alert_msg: "Please wait! we are login you in .....",
      schema: {
        email: "required|min:3|max:50|email",
        password: "required|min:8|max:50",
      },
    };
  },
  computed: {
    ...mapState(useUserStore, ["userLogedIn"]),
  },
  methods: {
    ...mapActions(useUserStore, {
      authenticate: "Login",
    }),
    async login(values) {
      this.log_show_alert = true;
      this.log_in_submission = true;

      try {
        await this.authenticate(values);
      } catch (error) {
        this.log_in_submission = false;
        this.log_alert_msg = "error!!";
        this.log_alert_variant = "bg-red-500";

        console.log(error);
        return;
      }

      this.log_in_submission = true;
      this.log_alert_msg = "Success";
      this.log_alert_variant = "bg-green-500";
      location.reload();
    },
  },
  mounted() {
    console.log(this.userLogedIn);
  },
};
</script>
