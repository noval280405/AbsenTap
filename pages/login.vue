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
  
      <v-card class="mx-auto pa-12 pb-8" elevation="8" rounded="xl" flat width="555" height="631">
        <v-img class="mx-auto" height="68" max-width="300" src="TAP.png"></v-img>
        <br />
        <v-card-title class="text-h4 text-center">
          <p class="font-weight-bold text-blue-darken-4">Sign In to Your Account</p>
        </v-card-title>
        <br />
        <v-card-text>
          <v-text-field
            label="Email"
            append-inner-icon="mdi-email"
            v-model="data.username"
            variant="underlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="data.password"
            label="Password"
            variant="underlined"
            required
            :append-inner-icon="data.show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="data.show1 ? 'text' : 'password'"
            @click:append-inner="data.show1 = !data.show1"
          ></v-text-field>
          <a href="/create-name-password" class="text-right" style="text-decoration: none; margin-left: auto; display: block; color: grey;">Forgot Password?</a>
          <v-checkbox label="Remember Me" style="margin-top: -9%;"></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-btn style="background-color: #365B97;"  rounded="lg" @click="login" class="text-white mx-auto" width="340" >
            <span class="text-subtitle-1">Sign In</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </template>
  
  <script setup>
  
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter()

  definePageMeta({
    layout: "blank",
  });
  

  
  const data = reactive({
    show1: false,
    timeout: 2000,
    snackbar: false,
    text: "Invalid Credentials",
    username: "",
    password: "",
  });
  
  const login = async () => {

    useloadingStore().setLoading(true);
  
    const user = await loginUser(data.username, data.password);
  
    data.snackbar = true;
  
    if (user) {
      console.log("login successful");
      data.text = "Login Successful";
      router.push("/admin/dashboard");
    } else {
      console.log("login failed");
    }
  
    useloadingStore().setLoading(false);
  };
  </script>
  
  <style scoped>
  .background-image {
    background-image: url('/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  }
  </style>
  