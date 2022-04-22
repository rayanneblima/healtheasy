<template>
  <div id="form-contato">
    <h4>Envie uma <span>mensagem</span></h4>

    <form @submit.prevent="enviarMensagem">
      <Input
        name="nome"
        :value="contato.nome"
        placeholder="Nome completo"
        @input="contato.nome = $event.target.value"
      />

      <Input
        name="email"
        type="email"
        :value="contato.email"
        placeholder="E-mail"
        @input="contato.email = $event.target.value"
      />

      <Input
        name="assunto"
        :value="contato.assunto"
        placeholder="Assunto"
        @input="contato.assunto = $event.target.value"
      />

      <Input
        name="mensagem"
        :value="contato.mensagem"
        placeholder="Mensagem"
        isTextArea
        @input="contato.mensagem = $event.target.value"
      />

      <Button
        type="submit"
        text="Enviar mensagem"
        bgColor="var(--dark-blue)"
        :width="300"
      />
    </form>
  </div>
</template>

<script>
import Input from "@/components/landing/elements/Input";
import Button from "@/components/landing/elements/Button";

export default {
  name: "FormContato",

  components: {
    Input,
    Button
  },

  data() {
    return {
      contato: {
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      }
    }
  },

  methods: {
    enviarMensagem () {
      if (!this.contato.nome || !this.contato.email || !this.contato.assunto || !this.contato.mensagem) {
        alert('Preencha todas as informações antes de enviar a mensagem.')
        return
      }

      // TODO: enviar mensagem
      console.log(this.contato)
    }
  }
}
</script>

<style scoped>
#form-contato {
  background: var(--white);
  border: 2px solid var(--dark-green);
  border-radius: 10px;

  height: auto;
  margin-inline: auto;
  min-width: 280px;
  padding: 40px 0;
  text-align: center;
  width: 80%;
}

#form-contato h4 {
  font-size: 1.8rem;
  margin-bottom: 30px;
}

#form-contato span {
  color: var(--dark-green);
}

form {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
}
</style>
