<template>
  <a
    v-if="!type"
    :href="link"
    :target="target"
    :class="width === 140 ? 'default-width' : ''"
    :style="{
      backgroundColor: bgColor,
      height: height + 'px',
      width: width + 'px',
    }"
    @click="$emit('click')"
  >
    {{ text }}
  </a>

  <button
    v-else
    :type="type"
    @click="$emit('click')"
    :class="width === 140 ? 'default-width' : ''"
    :style="{
      backgroundColor: bgColor,
      height: height + 'px',
      width: width + 'px',
    }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    text: {
      default: "",
      required: true,
      type: String,
    },

    link: {
      default: "#",
      type: String,
    },

    type: {
      default: "",
      type: String,
    },

    target: {
      default: "",
      type: String,
    },

    bgColor: {
      default: "var(--dark-purple)",
      type: String,
    },

    height: {
      default: 40,
      type: Number,
    },

    width: {
      default: 140,
      type: Number,
    },
  },
};
</script>

<style scoped>
a,
button {
  border: none;
  border-radius: 4px;
  color: var(--white) !important;

  align-items: center;
  display: inline-flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;
}

a:hover,
button:hover {
  opacity: 0.8;
}

/* @media (max-width: 615px) {
  a.default-width,
  button.default-width {
    width: 100px !important;
  }
} */

@media (max-width: 615px) {
  a,
  button {
    max-width: 260px !important;
  }
}
</style>
