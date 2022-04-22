<template>
  <section id="contato" ref="contato">
    <div class="content grid">
      <div class="titulo">
        <h2>Entre em <span>contato</span></h2>
        <p>
          Lorem ipsum is common placeholder text used to demonstrate
          the graphic elements of a document or visual presentation.
        </p>

        <div class="contato-sites">
          <SocialButton
            v-for="site in sites"
            :key="site.id"
            :iconName="site.icone"
            :link="site.link"
            isColored
          />
        </div>
      </div>

      <FormContato />
    </div>
  </section>
</template>

<script>
import { sites } from "@/static/landing-page";
import SocialButton from "@/components/landing/elements/SocialButton";
import FormContato from "@/components/landing/groups/FormContato";

export default {
  name: "Contato",

  components: {
    SocialButton,
    FormContato
  },

  data () {
    return {
      sites: sites
    }
  }
}
</script>

<style scoped>
#contato {
  background: var(--light-blue);
  min-height: 80vh;
}

.content {
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
}

.titulo {
  text-align: center;
}

.titulo h2 {
  font-size: 3rem;
  margin-bottom: 30px;
}

.titulo span {
  color: var(--dark-green);
}

.titulo p {
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: left;
  width: 80%;
}

.contato-sites {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-inline: auto;
  max-width: 320px;
}

@media (max-width: 768px) {
  .content.grid {
    gap: 40px;
    grid-template-rows: auto 1fr;
    margin: 0;
  }

  .titulo {
    width: 100%;
  }
}

</style>
