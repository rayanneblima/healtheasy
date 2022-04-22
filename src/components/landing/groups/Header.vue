<template>
  <header :class="`${isMenuOpen ? 'open' : ''}`">
    <div class="content" v-if="!isMobile">
      <nav>
        <ul class="">
          <li class="logo-item">
            <a href="/#home" class="logo">
              <img src="@/assets/logos/logo.png" alt="Health Easy" />
            </a>
          </li>

          <li class="menu-itens" v-for="item in menu" :key="item.id">
            <a :href="item.link">{{ item.nome }}</a>
          </li>
        </ul>
      </nav>

      <div class="header-buttons">
        <Button text="Login" @click="redirectToApp" />
      </div>
    </div>

    <div :class="`content mobile ${isMenuOpen ? 'open' : ''}`" v-else>
      <div class="header-top">
        <p @click="isMenuOpen = !isMenuOpen" class="menu-button">
          <span :class="`mdi mdi-${isMenuOpen ? 'close' : 'menu'}`"></span>
        </p>

        <router-link to="/#home" class="logo">
          <img src="@/assets/logos/logo.png" alt="Health Easy" />
        </router-link>

        <div class="header-buttons">
          <Button text="Login" @click="redirectToApp" />
        </div>
      </div>

      <transition name="menu-transition">
        <nav v-show="isMenuOpen">
          <ul>
            <li class="logo-item"></li>
            <li class="menu-itens" v-for="item in menu" :key="item.id">
              <a :href="item.link">{{ item.nome }}</a>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
import { menu } from "@/static/landing-page";
import Button from "@/components/landing/elements/Button";

export default {
  name: "Header",

  components: {
    Button,
  },

  data() {
    return {
      menu: menu,
      isMenuOpen: false,
      isMobile: false,
    };
  },

  created() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.checkScreen());
    });
  },

  mounted() {
    window.addEventListener("resize", this.checkScreen);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreen);
  },

  methods: {
    redirectToApp() {
      window.location.href = window.location.origin + "/app";
    },

    checkScreen() {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 850) {
        this.isMobile = true;
        return;
      }
      this.isMobile = false;
    },
  },
};
</script>

<style scoped>
header {
  background: var(--white);
  border-bottom: 1px solid var(--light-gray);
  min-height: 8vh;
  padding: 20px 0;
  position: sticky;
  top: -1px;
  z-index: 999;
}

header.open {
  border-right: 1px solid var(--light-gray);
  height: 100vh;
  position: fixed;
  width: 60vw;
}

.content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0;
}

.content nav ul {
  align-items: center;
  display: flex;
  gap: 40px;
}

.logo img {
  width: 200px;
}

.content nav a:not(.logo) {
  color: var(--black);
  font-size: 1.2rem;
  font-weight: 500;
  position: relative;
}

.content nav li:nth-child(2) a {
  font-weight: 600;
}

.content nav a:before {
  background: var(--dark-blue);
  bottom: 0;
  content: "";
  height: 0;
  left: -10px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  width: 100%;
}

nav a:hover:not(.logo):before {
  height: 1px;
  left: 0;
  visibility: visible;
}

.header-buttons {
  display: flex;
  gap: 20px;
}

.menu-button {
  align-self: start;
  cursor: pointer;
  font-size: 1.8rem;
}

.content.mobile {
  align-items: start;
  flex-direction: column;
}

.mobile.open > .header-top {
  flex-direction: column;
  gap: 20px;
}

.header-top {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.content.mobile nav {
  height: 100vh;
  width: 100%;
}

.content.mobile nav ul {
  flex-direction: column;
  gap: 40px;
}

@media (max-width: 550px) {
  .mobile:not(.open) .header-buttons {
    display: none;
  }

  .mobile:not(open) .header-top {
    justify-content: start;
    gap: 20px;
  }
}
</style>
