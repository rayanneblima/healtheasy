<template>
  <div class="card-especialidade" v-show="especialidade">
    <!-- <span class="mdi mdi-hammer-screwdriver" style="fontsize: 50px" /> -->
    <h5>{{ especialidade.nome }}</h5>
    <p>{{ especialidade.descricao }}</p>
  </div>
</template>

<script>
export default {
  name: "CardEspecialidade",

  props: {
    especialidade: {
      default: () => ({}),
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.card-especialidade {
  background: var(--light-green);
  border-radius: 8px;
  font-size: 1.4rem;

  align-items: center;
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
}

.card-especialidade .mdi {
  color: var(--dark-purple);

  display: block;
  max-width: 100%;
  transition: all 0.2s ease-in-out;
}

.card-especialidade .mdi:hover {
  transform: scale(1.1);
}

.card-especialidade h5 {
  color: var(--dark-blue);
  margin: 10px 0;
}

.card-especialidade p {
  color: var(--gray);
  text-align: center;
}
</style>
