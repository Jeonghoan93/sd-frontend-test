<template>
  <div class="customer-detail">
    <router-link to="/customers" class="back-button"
      >Back to the list</router-link
    >
    <h2 v-if="customer">
      <span class="light-text">Customers ></span> {{ customer.name }}
    </h2>
    <div v-if="loading" class="loading-indicator">Loading...</div>
    <div v-if="error" class="error-message">{{ error }}</div>
    <div v-if="customer">
      <div><strong>ID:</strong> {{ customer.id }}</div>
      <div><strong>Name:</strong> {{ customer.name }}</div>
      <div><strong>ARR:</strong> {{ customer.arr }}</div>
      <div><strong>Active Since:</strong> {{ customer.activeAt }}</div>
      <div><strong>Seats:</strong> {{ customer.seats }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        customers: [],
        customer: null,
        loading: true,
        error: null,
      };
    },
    mounted() {
      this.fetchAllCustomers();
    },
    methods: {
      fetchAllCustomers() {
        const url = "https://startdeliver-mock-api.glitch.me/customer";
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.customers = data;
            this.customer = this.customers.find(
              (c) => c.id === parseInt(this.$route.params.customerId)
            );
            this.loading = false;
          })
          .catch((err) => {
            this.error = "Error fetching customer details: " + err.message;
            this.loading = false;
          });
      },
    },
  };
</script>

<style scoped>
  .customer-detail {
    padding: 20px;
  }

  .back-button {
    margin-bottom: 20px;
    color: #2050fe;
    text-decoration: none;
  }

  .loading-indicator,
  .error-message {
    font-size: 14px;
    margin-top: 10px;
  }
  .light-text {
    font-weight: 400;
    font-size: 0.9em;
    margin-right: 5px;
  }
</style>
