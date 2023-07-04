<template>
  <div>
    <h2>{{ client.name }}</h2>
    <p>Email: {{ client.email }}</p>
    <p>Telefone: {{ client.phone }}</p>
  </div>
</template>

<script>
export default {
  props: ['client'],
};
</script>
