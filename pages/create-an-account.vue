<template>
    <vue-loading></vue-loading>
    <div class="d-flex align-center justify-center background-image">
      <v-snackbar
        v-model="data.snackbar"
        :timeout="data.timeout"
        location="top"
        color="red"
        rounded="lg"
        elevation="8"
        class="d-flex align-center justify-center"
      >
        {{ data.text }}
  
        <template v-slot:actions>
          <v-btn color="white" variant="text" @click="data.snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        rounded="xl"
        flat
        width="555"
        height="471"
      >
        <v-img class="mx-auto" height="88" max-width="68" src="TAP.png"></v-img>
        <v-card-text>
          <p class="font-weight-bold text-center text-h5 text-blue-darken-4">Create Account</p>
          <br />
          <v-text-field
            label="Email"
            v-model="data.username"
            variant="underlined"
            required
          ></v-text-field>
          <br />
          <v-text-field
            label="Password"
            v-model="data.password"
            variant="underlined"
            required
            append-inner-icon="mdi-eye"
          ></v-text-field>
          <br />
          <v-btn
            color="#365B97"
            block
            rounded="lg"
            @click="resetpassword()"
            class="mx-auto"
          >
          <p class="text-subtitle-1">Send email to reset password</p>
          </v-btn>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: "blank",
  });
  
  import { reactive } from "vue";
  import { useRouter } from "vue-router";
  
  const data = reactive({
    show1: false,
    timeout: 2000,
    snackbar: false,
    text: "Invalid Credentials",
    username: "",
    password: "",
  });
  
  const resetpassword = async () => {
    useloadingStore().setLoading(true);
  
    const b = await resetpass(data.username);
    if (b == "ok") {
      useNuxtApp().$toast.success("Harap cek Email anda ");
      navigateTo("/login");
    } else {
      useNuxtApp().$toast.error(b);
    }
    useloadingStore().setLoading(false);
  };
  </script>
  
  <style scoped>
  .background-image {
    background-image: url("/background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  }
  </style>
  