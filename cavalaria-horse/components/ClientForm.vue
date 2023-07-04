<template>
  <form @submit.prevent="addClient">
    <div>
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="name" required />
    </div>

    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
    </div>

    <div>
      <label for="phone">Telefone:</label>
      <input type="tel" id="phone" v-model="phone" required />
    </div>

    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },

  methods: {
    addClient() {
      const newClient = {
        id: Date.now(),
        name: this.name,
        email: this.email,
        phone: this.phone,
      };

      this.$emit('client-added', newClient);

      this.name = '';
      this.email = '';
      this.phone = '';
    },
  },
};
</script>
