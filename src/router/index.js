import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/modules/landing/App.vue";
import App from "@/modules/app/App.vue";
import AdminApp from "@/modules/admin/App.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
  },
  {
    path: "/#home",
    name: "home",
    component: LandingPage,
  },
  {
    path: "/site",
    name: "site",
    component: LandingPage,
  },
  {
    path: "/app",
    name: "App",
    component: App,
    //   children: [
    //     {
    //       path: 'check',
    //       menu: false
    //     },
    //     {
    //       icon: 'mdi-view-dashboard',
    //       path: 'dashboards',
    //       name: 'dashboards',
    //       text: 'Dashboard',
    //       grupo: '',
    //       menu: true,
    //       component: () => import('@views/dashboard/Dashboard')
    //     },
    //     {
    //       icon: 'mdi-label-multiple',
    //       path: 'categorias',
    //       name: 'categorias',
    //       text: 'Categorias',
    //       grupo: 'cadastro',
    //       menu: true,
    //       component: () => import('@views/categoria/ConsultaCategoria')
    //     },
    //     {
    //       icon: 'mdi-label-variant',
    //       path: 'marcas',
    //       name: 'marcas',
    //       text: 'Marcas',
    //       grupo: 'cadastro',
    //       menu: true,
    //       component: () => import('@views/marca/ConsultaMarca')
    //     },
    //     {
    //       icon: 'mdi-form-textbox',
    //       path: 'atributos',
    //       name: 'atributos',
    //       text: 'Atributos',
    //       grupo: 'cadastro',
    //       menu: true,
    //       component: () => import('@views/atributo/ConsultaAtributo')
    //     },
    //     {
    //       icon: 'mdi-package-variant-closed',
    //       path: 'produto',
    //       name: 'produto',
    //       text: 'Produtos',
    //       grupo: 'cadastro',
    //       menu: true,
    //       component: () => import('@views/produto/ConsultaProduto')
    //     },
    //     {
    //       path: 'produto/:id',
    //       name: 'produtoid',
    //       menu: false,
    //       component: () => import('@views/produto/CadProduto')
    //     },
    //     {
    //       icon: 'mdi-warehouse',
    //       path: 'centrodistribuicao',
    //       name: 'centrodistribuicao',
    //       text: 'Centros de Distribuição',
    //       grupo: 'cadastro',
    //       menu: true,
    //       component: () => import('@views/centrodistribuicao/ConsultaCentroDistribuicao')
    //     },
    //     {
    //       icon: 'mdi-shopping',
    //       path: 'pedido',
    //       name: 'pedido',
    //       text: 'Pedidos',
    //       grupo: 'cadastro',
    //       menu: true,
    //       component: () => import('@views/pedido/ConsultaPedido')
    //     },
    //     {
    //       path: 'pedido/:id',
    //       name: 'pedidoid',
    //       menu: false,
    //       component: () => import('@views/pedido/CadPedido')
    //     },
    //     {
    //       icon: 'mdi-sale',
    //       path: 'ofertaproduto',
    //       name: 'ofertaproduto',
    //       text: 'Ofertas de Produtos',
    //       grupo: 'cadastro',
    //       menu: true,
    //       component: () => import('@views/produto/oferta/CadOferta')
    //     },
    //     {
    //       icon: 'mdi-cog-sync-outline',
    //       path: 'integracao',
    //       name: 'integracao',
    //       text: 'Integrações',
    //       grupo: 'manutencao',
    //       menu: true,
    //       component: () => import('@views/integracao/ConsultaIntegracao')
    //     },
    //     {
    //       icon: 'mdi-bug',
    //       path: 'logs',
    //       name: 'map_logs',
    //       text: 'Logs',
    //       grupo: 'manutencao',
    //       menu: true,
    //       component: () => import('@views/log/Log')
    //     },
    //     {
    //       icon: 'mdi-package-variant-closed',
    //       path: 'mapeamento/produtos',
    //       name: 'map_produtos',
    //       text: 'Produtos',
    //       grupo: 'mapeamentos',
    //       menu: true,
    //       component: () => import('@views/mapeamento/produto/CadMapeamentoProduto')
    //     },
    //     {
    //       icon: 'mdi-label-multiple',
    //       path: 'mapeamento/categoria',
    //       name: 'map_categoria',
    //       text: 'Categorias',
    //       grupo: 'mapeamentos',
    //       menu: true,
    //       component: () => import('@views/mapeamento/categoria/CadMapeamentoCategoria')
    //     },
    //     {
    //       icon: 'mdi-form-textbox',
    //       path: 'mapeamento/atributo',
    //       name: 'map_atributo',
    //       text: 'Atributos',
    //       grupo: 'mapeamentos',
    //       menu: true,
    //       component: () => import('@views/mapeamento/atributo/CadMapeamentoAtributo')
    //     },
    //     {
    //       icon: 'mdi-map',
    //       path: 'mapeamento/transportadora',
    //       name: 'map_transportadora',
    //       text: 'Transportadoras',
    //       grupo: 'mapeamentos',
    //       menu: true,
    //       component: () => import('@views/mapeamento/transportadora/CadMapeamentoTransportadora')
    //     },
    //     {
    //       icon: 'mdi-account-lock-outline',
    //       path: 'usuario',
    //       name: 'usuario',
    //       text: 'Usuário',
    //       grupo: 'usuarios',
    //       menu: true,
    //       component: () => import('@views/usuario/ConsultaUsuario')
    //     },
    //     {
    //       icon: 'mdi-account-key',
    //       path: 'alterasenha',
    //       name: 'alterasenha',
    //       text: 'Alterar Senha',
    //       grupo: 'usuarios',
    //       menu: false,
    //       component: () => import('@views/usuario/AlteraSenha')
    //     },
    //     {
    //       icon: 'mdi-currency-usd',
    //       path: 'importacaoprecos',
    //       name: 'importarprecos',
    //       text: 'Preços',
    //       grupo: 'importacoes',
    //       menu: true,
    //       component: () => import('@views/importacao/precos/ImportacaoPrecos')
    //     },
    //     {
    //       icon: 'mdi-forklift',
    //       path: 'importacaoestoque',
    //       name: 'importarestoque',
    //       text: 'Estoque',
    //       grupo: 'importacoes',
    //       menu: true,
    //       component: () => import('@views/importacao/estoque/ImportacaoEstoque')
    //     },
    //     {
    //       icon: 'mdi-label-multiple',
    //       path: 'importacaomapcategorias',
    //       name: 'importarmapcategorias',
    //       text: 'Mapeamento de Categorias',
    //       grupo: 'importacoes',
    //       menu: true,
    //       component: () => import('@views/importacao/mapcategorias/ImportacaoMapCategorias')
    //     },
    //     {
    //       icon: 'mdi-package-variant-closed',
    //       path: 'importacaomapprodutos',
    //       name: 'importarmapprodutos',
    //       text: 'Mapeamento de Produtos',
    //       grupo: 'importacoes',
    //       menu: true,
    //       component: () => import('@views/importacao/mapprodutos/ImportacaoMapProdutos')
    //     }
    //  ]
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminApp,
    meta: { requiresAuth: true },
    // children: [
    //   {
    //     path: "overview",
    //     name: "overview",
    //     component: Overview,
    //   },
    //   {
    //     path: "products",
    //     name: "products",
    //     component: Products,
    //   },
    //   {
    //     path: "profile",
    //     name: "profile",
    //     component: Profile,
    //   },
    //   {
    //     path: "orders",
    //     name: "orders",
    //     component: Orders,
    //   },
    // ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
//   const currentUser = fb.auth().currentUser; // TODO: auth

//   if (requiresAuth && !currentUser) {
//     next("/");
//   } else if (requiresAuth && currentUser) {
//     next();
//   } else {
//     next();
//   }
// });

export default router;
