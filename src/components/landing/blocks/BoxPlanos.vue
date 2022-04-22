<template>
  <div id="box-planos">
    <template v-for="plano in planos" :key="plano.id">
      <CardPlano :plano="plano" />
    </template>
  </div>
</template>

<script>
import { planos } from "@/static/landing-page";
import CardPlano from "@/components/landing/elements/CardPlano";

export default {
  name: "BoxPlanos",

  components: {
    CardPlano
  },

  data () {
    return {
      planos: planos
    }
  }
}
</script>

<style scoped>
#box-planos {
  align-items: center;
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-inline: auto;
  padding: 0 20px;
  max-width: 1200px;
}

/* @media (max-width: 768px) {
  #box-planos {
    flex-wrap: wrap;
    max-width: 600px;
  }
} */

/*
@media (max-width: 425px) {
  #box-planos {
    grid-template-columns: 1fr;
    max-width: 300px;
  }
} */
</style>
