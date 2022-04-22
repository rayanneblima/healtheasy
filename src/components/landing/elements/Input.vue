<template>
  <label
    class="input"
    :style="{
      border: `2px solid ${color}`,
      color: color,
      height: isTextArea ? 4*height + 'px' : height + 'px',
      width: width + 'px'
    }"
  >
    {{ label }}

    <!-- TODO: icone -->
    <!-- <mdicon
      :name="iconName"
      :size="iconSize"
    /> -->

    <input
      v-if="!isTextArea"
      :value="value"
      :min="min"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    />

    <textarea
      v-else
      :value="value"
      :name="name"
      :placeholder="placeholder"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    >
    </textarea>
  </label>
</template>

<script>
export default {
  name: "Input",

  props: {
    label: {
      default: '',
      type: String
    },

    name: {
      default: '',
      required: true,
      type: String
    },

    type: {
      default: 'text',
      type: String
    },

    isTextArea: {
      default: false,
      type: Boolean
    },

    color: {
      default: 'var(--dark-blue)',
      type: String
    },

    value: {
      required: true
    },

    min: {
      default: 0,
      required: false,
      type: Number
    },

    placeholder: {
      default: '',
      required: true,
      type: String
    },

    iconName: {
      default: '',
      required: false,
      type: String
    },

    iconSize: {
      default: 20,
      required: false,
      type: Number
    },

    height: {
      default: 40,
      required: false,
      type: Number
    },

    width: {
      default: 300,
      required: false,
      type: Number
    }
  },

  computed: {
    model: {
      get () {
        return this.value;
      },
      set (value) {
        this.$emit('input', value);
      },
    },
  }
}
</script>

<style scoped>
.input {
  border-radius: 4px;
  position: relative;
}

.mdi {
  position: absolute;
  top: 5px;
}

input,
textarea {
  background: transparent;
  border: none;
  border-radius: 4px;

  height: 100%;
  text-indent: 30px;
  transition: all 0.2s ease-in-out;
  width: 100%;
}

textarea {
  padding-top: 5px;
  resize: none;
}

.input:hover {
  opacity: 0.8;
}

@media (max-width: 615px) {
  label {
    max-width: 260px !important;
  }
}
</style>
