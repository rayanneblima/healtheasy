<template>
  <section id="planos">
    <div class="titulo">
      <h2>Nossos <b>planos</b></h2>
      <p>
        Lorem ipsum is common placeholder text used to demonstrate the graphic
        elements of a document or visual presentation.
      </p>
    </div>

    <BoxPlanos />
  </section>
</template>

<script>
import BoxPlanos from "@/components/landing/blocks/BoxPlanos";

export default {
  name: "Planos",

  components: {
    BoxPlanos,
  },
};
</script>

<style scoped>
#planos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-inline: auto;
  max-width: 1200px;
  min-height: 100vh;
  padding: 40px 0 80px;
}

.titulo {
  margin-bottom: 5vh;
}

.titulo h2 {
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 10px;
}

.titulo b {
  color: var(--dark-blue);
}

.titulo p {
  font-size: 1.2rem;
  line-height: 1.4;
  width: 60%;
}
</style>
