<template>
  <div class="card-plano" v-show="preco">
    <span class="flag-discount" v-show="desconto > 0">{{ desconto * 100 }}% OFF</span>
    <div class="plano-preco">
      <h4><span>R$</span>{{ preco }} *</h4>
      <p>/mês</p>
    </div>
    <div class="plano-descricao">
      <h6>What's included</h6>
      <ul>
        <li class="plano-item" v-for="item in servicos" :key="item.id">
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

    <sub><b>*</b> R$ 29,90 por quantidade de acesso</sub>
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
    desconto: {
      default: 0,
      type: Number
    },

    preco: {
      default: '',
      type: String
    },

    servicos: {
      default: () => ([]),
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>
.card-plano {
  background: var(--light-blue);
  border: 2px solid var(--dark-blue);
  border-radius: 6px;
  box-shadow: 0px 10px 20px rgb(41 41 42 / 7%);

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 450px;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 300px;
}

.card-plano:hover {
  transform: scale(1.1);
}

.flag-discount {
  background: var(--dark-purple);
  border-radius: 6px 6px 0 0;
  color: var(--white);
  font-size: 15px;
  font-weight: 400;
  text-align: center;

  display: block;
  max-width: 50px;
  padding: 5px;
  position: absolute;
  right: 20px;
  top: -2px;
}

.flag-discount::before,
.flag-discount::after {
  border-style: solid;
  content: "";
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}

.flag-discount::before {
  border-color: var(--dark-purple) transparent transparent transparent;
  border-width: 35px 30px 0 0;
  bottom: -32px;
  left: 0;
}

.flag-discount::after {
  border-color: transparent var(--dark-purple) transparent transparent;
  border-width: 0 30px 35px 0;
  bottom: -32px;
  right: 0;
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

sub {
  margin-top: 20px;
}

@media (max-width: 425px) {
  .plano-preco {
    align-self: flex-start;
  }
}
</style>
