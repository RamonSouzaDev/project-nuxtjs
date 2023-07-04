<template>
  <div>
    <h1>Lista de Clientes</h1>
    <ul>
      <li v-for="client in clients" :key="client.id" @click="selectClient(client)">
        {{ client.name }}
      </li>
    </ul>

    <ClientDetail v-if="selectedClient" :client="selectedClient" />

    <nuxt-link to="/clients/new">Cadastrar Cliente</nuxt-link>
  </div>
</template>

<script>
import ClientForm from '~/components/ClientForm.vue';
import ClientDetail from '~/components/ClientDetail.vue';
import Client from '~/models/Client.js';

export default {
  data() {
    return {
      clients: [
        new Client(1, 'Cliente 1', 'cliente1@example.com', '1234567890'),
        new Client(2, 'Cliente 2', 'cliente2@example.com', '0987654321'),
      ],
      selectedClient: null,
    };
  },

  components: {
    ClientForm,
    ClientDetail,
  },

  methods: {
    selectClient(client) {
      this.selectedClient = client;
    },

    addClient(client) {
      this.clients.push(client);
    },
  },
};
</script>
