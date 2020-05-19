<template>
  <div @click="close" class="container_image">
    <span class="close" @click="close"/>
    <img class="image_full" :src="urlImage" width="500" height="500" />
  </div>
</template>

<script>
export default {
  name: 'FullImage',
  props: {
    urlImage: {
      type: String
    },
    close: {
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped>
  .container_image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    box-shadow: 3px 4px 8px 2px #0000006e;
    z-index: 2;
  }
  .image_full {
    border-radius: 20px;
  }
  .close {
    position: absolute;
    right: -55px;
    top: 0px;
    width: 50px;
    height: 50px;
    background-image: url('../assets/close_black.svg');
  }
</style>