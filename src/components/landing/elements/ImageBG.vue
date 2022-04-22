<template>
  <div class="image-bg">
    <div class="bg" :style="{ backgroundColor: bgColor }"></div>
    <!-- TODO: trocar imagem -->
    <img src="@/assets/mockup-1.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "ImageBG",

  props: {
    bgColor: {
      default: "",
      required: false, // TODO:
      type: String,
    },

    imageName: {
      default: "",
      required: true,
      type: String,
    },

    imageAlt: {
      default: "",
      required: false, // TODO:
      type: String,
    },
  },
};
</script>

<style scoped>
.image-bg {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.bg {
  background: var(--dark-purple);
  border-radius: 16px;
  height: 60vh;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  width: 60%;
  z-index: 1;
}

img {
  height: auto;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  z-index: 2;
}

@media (max-width: 768px) {
  .bg {
    height: 70%;
    width: 80%;
  }

  img {
    height: 100%;
  }
}

/* @media (max-width: 668px) {
  .bg {
    width: 100%;
  }
}

@media (max-width: 504px) {
  .bg {
    display: none;
  }
} */
</style>
