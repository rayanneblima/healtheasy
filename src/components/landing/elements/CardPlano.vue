<template>
  <div :class="`card-plano plano-${plano.id}`" v-show="plano">
    <div class="plano-preco">
      <h4><span>R$</span>{{ plano.valor }}</h4>
      <p>/mês</p>
    </div>
    <div class="plano-descricao">
      <h6>What's included</h6>
      <ul>
        <li class="plano-item" v-for="item in plano.inclui" :key="item.id">
          <p>
            {{ item.nome }}
            <span
              :class="`mdi mdi-${item.icone}`"
              style="fontSize: 25px"
            />
          </p>
        </li>
      </ul>

      <Button text="Aderir ao plano" :width="180" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/landing/elements/Button";

export default {
  name: "CardPlano",

  components: {
    Button
  },

  props: {
    plano: {
      default: () => ({}),
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.card-plano {
  background: var(--light-blue);
  border-radius: 6px;
  box-shadow: 0px 10px 20px rgb(41 41 42 / 7%);

  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 450px;
  justify-content: flex-start;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  width: 300px;
}

.card-plano:not(.plano-2):hover {
  border: 2px solid var(--dark-blue);
  transform: scale(1.1);
}

.plano-1,
.plano-3 {
  margin-top: 44px;
}

.plano-2 {
  border: 2px solid var(--dark-purple);
  transform: scale(1.1);
  z-index: 10;
}

.plano-2:hover {
  transform: scale(1.2);
}

.plano-preco h4 span {
  color: var(--dark-blue);
  font-weight: 400;
  font-style: italic;
  margin-right: 4px;
  opacity: 0.8;
}

.plano-preco h4 {
  font-weight: 700;
}

.plano-descricao {
  text-align: center;
  width: 100%;
}

.plano-descricao h6 {
  border-bottom: 1px solid var(--dark-blue);
  border-top: 1px solid var(--dark-gray);
  color: var(--dark-blue);
  font-size: 1.6rem;

  margin-top: 20px;
  padding: 10px 0;
  width: 100%;
}

.plano-descricao ul {
  margin-bottom: 20px;
  padding-left: 0px !important;
}

.plano-item {
  border-bottom: 1px solid var(--dark-blue);
  padding: 10px 0;
}

.plano-item p {
  color: var(--dark-gray);

  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px !important;
}

.plano-item p .mdi-check {
  color: var(--green);
}

.plano-item p .mdi-cancel {
  color: var(--red);
}

.plano-item p .mdi:hover {
  transform: scale(1.1);
}

/* @media (max-width: 768px) {
  .plano-1,
  .plano-3 {
    margin-top: 0;
  }

  .plano-2 {
    transform: scale(1);
  }

  .plano-2:hover {
    transform: scale(1.1);
  }
} */
</style>
