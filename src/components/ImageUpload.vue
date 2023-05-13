<template>
    <div>
        <button @click="openImageUpload">UPLOAD IMAGE</button>
        <input ref="fileInput" type="file" style="display: none" @change="handleImageUpload">
    </div>
</template>

<script>

export default {
  methods: {
    openImageUpload() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      console.log(file);
    },
  },
};
</script>

<style scoped lang="scss">
    button {
        background: white;
        padding: 4px 10px;
        border: 1px solid #000;
        border-radius: 5px;
        cursor: pointer;
        outline: inherit;
        border: 1px solid rgba(0, 125, 255, 0.5);
        border-radius: 4px;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        font-size: 1.4rem;
        color: $primary-blue;
    }
</style>