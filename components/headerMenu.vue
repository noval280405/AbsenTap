<template>
    <v-app-bar elevation="2" color="blue" height="84">
        <template v-slot:prepend>
            <img src="/TAP.png" height="51px" width="66px">
        </template>

        <template v-slot:append>
            <v-badge color="red" content="1">
                <v-avatar color="grey" size="30">
                    <v-icon size="20" color="white">mdi-bell</v-icon>
                </v-avatar>
            </v-badge>
        </template>
    </v-app-bar>
</template>

<script setup>

</script>
