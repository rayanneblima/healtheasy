<template>
  <footer>
    <div class="content grid">
      <div class="footer-sobre">
        <img src="@/assets/logos/logo-white.png" alt="Health Easy - Logomarca" />
        <p>
          Lorem ipsum dolor amet, consectetur adipiscing elit.
          Eget nisl nunc quam ac sed turpis volutpat. Cursus sed
          massa non nisi, placerat.
        </p>

        <div class="contato-sites">
          <SocialButton
            v-for="site in sites"
            :key="site.id"
            :iconName="site.icone"
            :link="site.link"
            :iconSize="20"
          />
        </div>
      </div>

      <div class="footer-servicos">
        <h5>Serviços</h5>
        <p>
          Lorem ipsum dolor amet, consectetur adipiscing elit.
          Eget nisl nunc quam ac sed turpis volutpat. Cursus sed
          massa non nisi, placerat.
        </p>
        <p>ícones</p>
      </div>

      <div class="footer-contato">
        <h5>Contato</h5>
        <p>
          <mdicon
            name="email"
            size="25"
          />
          contato@healtheasy.com.br
        </p>
        <p>
          <mdicon
            name="phone"
            size="25"
          />
          hello@landify.co
        </p>
        <p>
          <mdicon
            name="map-marker"
            size="25"
          />
          hello@landify.co
        </p>
      </div>
    </div>

    <div class="content copyright">
      <p>© 2021 - <span>Health Easy</span></p>

      <ul>
        <li>
          <a href="#">Termos & Condições</a>
        </li>
        <li>|</li>
        <li>
          <a href="#">Política de Privacidade</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { sites } from "@/static/landing-page";
import SocialButton from "@//components/landing/elements/SocialButton";

export default {
  name: "Footer",

  components: {
    SocialButton
  },

  data () {
    return {
      sites: sites
    }
  }
}
</script>

<style scoped>
footer {
  background: var(--black);
  min-height: 45vh;
}

.content {
  color: var(--white);
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
}

.footer-sobre img {
  margin-bottom: 20px;
  max-width: 200px;
}

.content h5 {
  font-size: 1.4rem;
}

.contato-sites {
  align-items: center;
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.footer-servicos,
.footer-contato {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-contato {
  text-align: center;
}

.copyright {
  color: var(--white);
  opacity: 0.8;
}

.copyright {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.copyright span {
  color: var(--dark-green);
}

.copyright ul {
  align-items: center;
  display: flex;
  gap: 10px;
}

.copyright ul a {
  color: var(--dark-green);
  transition: all 0.2s ease-in-out;
}

.footer-contato .mdi,
.copyright ul a:hover {
  color: var(--dark-purple) !important;
}

@media (max-width: 768px) {
  .content.grid {
    grid-template-rows: repeat(3, 1fr) !important;
  }

  .footer-contato {
    text-align: start;
  }
}

@media (max-width: 665px) {
  .copyright {
    flex-direction: column-reverse;
    gap: 20px;
    padding: 0 40px 40px !important;
  }

  .copyright ul {
    flex-direction: column;
  }

  .copyright ul li:nth-child(2) {
    display: none;
  }
}
</style>
