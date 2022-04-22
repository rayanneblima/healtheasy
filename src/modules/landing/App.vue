<template>
  <Header />
  <Home />
  <Especialidades />
  <Funcionalidades />
  <SobreApp1 />
  <SobreApp2 />
  <Planos />
  <Contato />
  <Footer />
</template>

<script>
import Header from "@js/components/landing/groups/Header";
import Home from "@js/components/landing/sections/Home";
import Especialidades from "@js/components/landing/sections/Especialidades";
import Funcionalidades from "@js/components/landing/sections/Funcionalidades";
import SobreApp1 from '@js/components/landing/sections/SobreApp1';
import SobreApp2 from '@js/components/landing/sections/SobreApp2';
import Planos from "@js/components/landing/sections/Planos";
import Contato from "@js/components/landing/sections/Contato";
import Footer from "@js/components/landing/sections/Footer";

export default {
  name: "LandingPage",

  components: {
    Header,
    Home,
    Especialidades,
    Funcionalidades,
    SobreApp1,
    SobreApp2,
    Planos,
    Contato,
    Footer,
  }
};
</script>

<style scoped>
@import "@css/landing-page.css";
</style>
