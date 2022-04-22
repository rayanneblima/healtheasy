<template>
  <div id="box-especialidades">
    <template v-for="especialidade in especialidades" :key="especialidade.id">
      <CardEspecialidade :especialidade="especialidade" />
    </template>
  </div>
</template>

<script>
import { especialidades } from "@/static/landing-page";
import CardEspecialidade from "@/components/landing/elements/CardEspecialidade";

export default {
  name: "BoxEspecialidade",

  components: {
    CardEspecialidade,
  },

  data() {
    return {
      especialidades: especialidades,
    };
  },
};
</script>

<style scoped>
#box-especialidades {
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  position: relative;
  top: -20vh;

  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  margin-inline: auto;
  max-width: 1200px;
  padding: 40px;
  place-content: center;
  place-items: center;
  row-gap: 20px;
}

@media (max-width: 1024px) {
  #box-especialidades {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  #box-especialidades {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 668px) {
  #box-especialidades {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
