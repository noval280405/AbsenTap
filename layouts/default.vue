<template>
    <v-layout>
      <v-app>
        <v-main style="background-color: #f4f9ff">
            <header-menu></header-menu>
          <v-container>
            <slot />
          </v-container>
        </v-main>
      </v-app>
    </v-layout>
  </template>