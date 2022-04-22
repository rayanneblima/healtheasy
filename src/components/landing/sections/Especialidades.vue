<template>
  <section id="especialidades">
    <div class="content">
      <div class="titulo">
        <h2>O sistema ideal para sua</h2>
        <p>especialidade médica:</p>
      </div>
    </div>

    <BoxEspecialidades />
  </section>
</template>

<script>
import BoxEspecialidades from "@/components/landing/blocks/BoxEspecialidades";

export default {
  name: "Especialidades",

  components: {
    BoxEspecialidades,
  },
};
</script>

<style scoped>
#especialidades {
  min-height: 70vh;
}

.content {
  background: var(--light-blue);
  height: 45vh;
  max-width: 100%;
}

.titulo h2 {
  font-size: 2.4rem;
  margin-bottom: 0;
}

.titulo p {
  color: var(--dark-blue);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}
</style>
