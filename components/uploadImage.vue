<template>
    <v-progress-linear color="primary" :model-value="useuploadStore.getprogressUpload" :height="10"></v-progress-linear>
    <br>
  <v-file-input label="File input" @change="onfilepicked"></v-file-input>
  <!-- <v-btn color="success" @click="uploadPicture">upload</v-btn> -->
  <br />
</template>

<script setup lang="ts">
onMounted(()=>{
    useuploadStore.setReset()
})
const useuploadStore = uploadStore();
async function uploadPicture() {
  useuploadStore.simpanFileAction();
}
function onfilepicked(event: any) {
  useuploadStore.setnameFile(event["target"]["files"][0]["name"]);
  useuploadStore.setfile(event.target.files[0]);
  useuploadStore.setTypeFile(event["target"]["files"][0]["type"]);
  uploadPicture()
}
</script>
