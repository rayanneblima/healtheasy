<template>
  <section id="planos">
    <div class="content">
      <div class="titulo">
        <h2>Nossos <span>planos</span></h2>
        <p>
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
      </div>

      <div class="plano-indicado">
        <fieldset class="qnt-acessos">
          <label for="qnt">Quantos profissionais utilizarão o sistema?</label>

          <Input
            name="qnt"
            type="number"
            :min="1"
            :value="qntAcessos"
            placeholder="Quantidade de Acessos"
            @input="qntAcessos = $event.target.value"
          />
        </fieldset>

        <CardPlano
          v-if="qntAcessos"
          :desconto="desconto"
          :preco="precoFinal"
          :servicos="planos.servicos"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { planos } from "@static/landing-page";
import Input from "@js/components/landing/elements/Input";
import CardPlano from "@js/components/landing/elements/CardPlano";

export default {
  name: "Planos",

  components: {
    Input,
    CardPlano
  },

  data () {
    return {
      qntAcessos: 1,
      planos: planos
    }
  },

  computed: {
    precoFinal () {
      let precoFinal = this.qntAcessos * planos.precoPadrao;

      precoFinal = precoFinal - (precoFinal * this.desconto);

      return precoFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace('R$', '');
    },

    planoIndicado () {
      if (this.qntAcessos >= 0 && this.qntAcessos <= 4) {
        return this.planos.opcoes[0];
      }

      if (this.qntAcessos >= 5 && this.qntAcessos <= 10) {
        return this.planos.opcoes[1];
      }

      return this.planos.opcoes[2];
    },

    desconto () {
      return this.planoIndicado.desconto;
    }
  }
};
</script>

<style scoped>
#planos {
  background: linear-gradient(
    180deg,
    var(--light-green) 10%,
    var(--white) 90%
  );
}

.titulo {
  margin-bottom: 40px;
}

.titulo h2 {
  font-size: 3rem;
}

.titulo span {
  color: var(--dark-blue);
}

.titulo p {
  margin-inline: 0;
  width: 60%;
}

.plano-indicado {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
}

.qnt-acessos {
  border: 1px solid var(--dark-blue);
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 260px;
  padding: 20px;
}

.qnt-acessos label {
  color: var(--dark-blue);
  font-weight: bold;
}

@media (max-width: 375px) {
  .titulo p {
    width: 100%;
  }
}
</style>
