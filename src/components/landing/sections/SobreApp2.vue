<template>
  <section id="sobre2">
    <div class="content grid">
      <div class="section-right">
        <ImageBG bgColor="var(--dark-blue)" />
      </div>

      <div class="section-left">
        <div class="titulo">
          <h2>Agenda médica na palma da mão</h2>

          <p>
            Com a agenda médica online do <b>Health Easy</b>, sua equipe controla
            agendamentos, diminui faltas por meio do envio de SMS e e-mail e ganha
            tempo para realizar o que realmente importa: o atendimento ao
            paciente.
          </p>
        </div>

        <div class="left-chips">
          <Chip
            title="+ de 10 milhões"
            subtitle="de atendimentos."
            bgColor="var(--light-green)"
            titleColor="var(--dark-blue)"
            :height="50"
            :width="200"
          />

          <Chip
            title="+ de 10 milhões"
            subtitle="de atendimentos."
            bgColor="var(--light-green)"
            titleColor="var(--dark-blue)"
            :height="50"
            :width="200"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chip from "@/components/landing/elements/Chip";
import ImageBG from "@/components/landing/elements/ImageBG";

export default {
  name: "SobreApp2",

  components: {
    Chip,
    ImageBG,
  },
};
</script>

<style scoped>
#sobre2 {
  background: linear-gradient(
    180deg,
    var(--light-blue) 80%,
    var(--light-green) 20%
  );
  min-height: 90vh;
}

.content {
  align-items: center;
  grid-auto-flow: dense;
  grid-template-columns: repeat(2, 1fr);
  min-height: 90vh;
}

.section-left {
  justify-content: center;
  width: 90%;
}

.section-left h2 {
  color: var(--dark-blue);
  font-size: 3rem;
  margin-bottom: 20px;
}

.section-left p {
  font-size: 1.2rem;
}

.left-chips {
  display: flex;
  gap: 40px;
}

.section-right {
  width: 90%;
}

@media (max-width: 768px) {
  .content.grid {
    grid-template-rows: 1fr 200px !important;
  }

  .grid > .section-right {
    order: 2 !important;
  }

  .grid > .section-left {
    order: 1 !important;
  }
}

@media (max-width: 668px) {
  .section-left,
  .section-right {
    width: 100%;
  }

  .left-chips {
    flex-direction: column;
    gap: 20px;
    margin-inline: auto;
  }
}
</style>
