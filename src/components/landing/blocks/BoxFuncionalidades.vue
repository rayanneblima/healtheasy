<template>
  <div id="box-funcionalidades">
    <template
      v-for="funcionalidade in funcionalidades"
      :key="funcionalidade.id"
    >
      <CardFuncionalidade :funcionalidade="funcionalidade" />
    </template>
  </div>
</template>

<script>
import { funcionalidades } from "@static/landing-page";
import CardFuncionalidade from "@js/components/landing/elements/CardFuncionalidade";

export default {
  name: "BoxFuncionalidades",

  components: {
    CardFuncionalidade,
  },

  data() {
    return {
      funcionalidades: funcionalidades,
    };
  },
};
</script>

<style scoped>
#box-funcionalidades {
  align-items: center;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  height: auto;
  margin-inline: auto;
  max-width: 1200px;
  place-content: center;
  place-items: center;
}

@media (max-width: 1024px) {
  #box-funcionalidades {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  #box-funcionalidades {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
