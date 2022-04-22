<template>
  <section id="funcionalidades">
    <div class="content">
      <div class="titulo">
        <h2>Funcionalidades</h2>
        <p>
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
      </div>

      <BoxFuncionalidades />
    </div>
  </section>
</template>

<script>
import BoxFuncionalidades from "@js/components/landing/blocks/BoxFuncionalidades";

export default {
  name: "Funcionalidades",

  components: {
    BoxFuncionalidades,
  },
};
</script>

<style scoped>
#funcionalidades {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;
  position: relative;
  top: -15vh;
}

.titulo {
  margin-bottom: 40px;
  text-align: center;
}

.titulo h2 {
  color: var(--dark-blue);
  font-size: 2.6rem;
}

.titulo p {
  width: 60%;
}
</style>
