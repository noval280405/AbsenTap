<template>
    <div class="d-flex align-center justify-center background-image">

        <v-card class="mx-auto mt-10" elevation="0" flat color="transparent">
            <v-img class="mx-auto" height="105" width="136" src="TAP.png"></v-img>
            <br />
            <v-card-title>
                <p class="font-weight-bold text-h2 text-center text-white">Selamat Datang</p>
                <br>
                <p class="text-center text-body-1 text-white font-weight-thin">di Aplikasi Absensi : Pantau Kehadiran
                    dengan Mudah dan Cepat!</p>
            </v-card-title>
            <br />
            <v-card-actions align="center">
                <v-row >
                    <v-col>
                        <v-btn width="200" rounded="lg" to="/login" variant="flat" class="mx-auto">
                            <p class="text-subtitle-1 text-blue-darken-4">Masuk</p>
                        </v-btn><br><br>
                        <v-btn width="200" rounded="lg" to="/daftar" variant="outlined" color="white" class="mx-auto">
                            <p class="text-subtitle-1 text-white">Daftar</p>
                        </v-btn>
                    </v-col>
                </v-row>

            </v-card-actions>
            <br>
            <br>
            <v-img height="534px" width="958px" src="/Rak-landingpage.png"></v-img>
        </v-card>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "blank",
});

import { reactive } from 'vue';
import { useRouter } from 'vue-router';

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
        useRouter().push("/admin/dashboard");
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
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>