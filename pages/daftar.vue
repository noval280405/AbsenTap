<template>
    <vue-loading></vue-loading>
    <div class="d-flex align-center justify-center background-image">
        <h1 align="center" class="text-white">Daftar</h1>
        <v-card class="mx-auto pa-12 pb-8" elevation="8" rounded="xl" flat width="555" height="631">
            <v-card-text>
                <v-text-field label="NIK"></v-text-field>
                <v-text-field label="Nama"></v-text-field>
                <v-text-field label="Email"></v-text-field>
                <v-select label="Divisi"></v-select>
                <v-select label="Jam Kerja"></v-select>
                <v-select label="Lokasi"></v-select>
                <v-text-field label="Password" :append-inner-icon="data.show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="data.show1 ? 'text' : 'password'"
                    @click:append-inner="data.show1 = !data.show1"></v-text-field>
            </v-card-text>
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