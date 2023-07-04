export default {
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'clients',
        path: '/clients',
        component: resolve(__dirname, 'pages/clients.vue')
      });
    }
  }
};
