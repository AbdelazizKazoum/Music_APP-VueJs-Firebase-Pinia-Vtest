import { defineStore } from "pinia";
import { auth, usersCollection } from "@/includes/firebase";
export default defineStore("user", {
  state: () => {
    return {
      userLogedIn: false,
    };
  },
  actions: {
    async register(values) {
      let userCred;
      userCred = await auth.createUserWithEmailAndPassword(
        values.email,
        values.psw
      );
      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.Country,
      });
      console.log(userCred);
    },

    async Login(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password);

      this.userLogedIn = true;
      console.log(auth.currentUser);
    },
    async logOut() {
      await auth.signOut();

      this.userLogedIn = false;
    },
  },
});
