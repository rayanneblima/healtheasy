<template>
  <div class="card-funcionalidade" v-show="funcionalidade">
    <span class="mdi mdi-hammer-screwdriver" style="fontsize: 50px" />
    <h5>{{ funcionalidade.nome }}</h5>
    <p>{{ funcionalidade.descricao }}</p>
  </div>
</template>

<script>
export default {
  name: "CardFuncionalidade",

  props: {
    funcionalidade: {
      default: () => ({}),
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.card-funcionalidade {
  background: var(--white);

  align-items: center;
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: center;
  padding: 0 20px;
  width: 300px;
}

.card-funcionalidade .mdi {
  color: var(--dark-purple);

  display: block;
  max-width: 100%;
  transition: all 0.2s ease-in-out;
}

.card-funcionalidade .mdi:hover {
  transform: scale(1.1);
}

.card-funcionalidade h5 {
  color: var(--dark-blue);
  font-size: 1.4rem;
  margin: 10px 0;
}

.card-funcionalidade p {
  color: var(--gray);
  text-align: center;
}
</style>
