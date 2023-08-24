<template>
  <div class="customers-section">
    <h2>Customers</h2>

    <div class="search-section">
      <input
        v-model="search"
        @input="fetchCustomers"
        placeholder="Search by name"
      />
    </div>

    <div v-if="loading" class="loading-indicator">Loading...</div>
    <div v-if="error" class="error-message">{{ error }}</div>

    <table v-if="customers && customers.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th @click="sortARR">
            ARR <span v-if="sortDirection">▼</span><span v-else>▲</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>
            <router-link :to="`/customers/${customer.id}`">{{
              customer.name
            }}</router-link>
          </td>
          <td>{{ customer.arr }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        customers: [],
        search: "",
        loading: true,
        error: null,
        sortDirection: true,
      };
    },
    mounted() {
      this.fetchCustomers();
    },
    methods: {
      fetchCustomers() {
        const url = this.search
          ? `https://startdeliver-mock-api.glitch.me/customer?name=${this.search}`
          : "https://startdeliver-mock-api.glitch.me/customer";

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.customers = data;
            this.loading = false;
          })
          .catch((err) => {
            this.error = "Error fetching customers: " + err.message;
            this.loading = false;
          });
      },
      sortARR() {
        this.sortDirection = !this.sortDirection;
        this.customers.sort((a, b) => {
          if (this.sortDirection) {
            return a.arr - b.arr; // For ascending
          } else {
            return b.arr - a.arr; // For descending
          }
        });
      },
    },
  };
</script>

<style scoped>
  .customers-section {
    padding: 2rem;
    background-color: #f7f7f9;
    font-family: "IBM Plex Sans", sans-serif;
  }

  h2 {
    margin-bottom: 1.5rem;
    color: #2050fe;
  }

  .search-section {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #a4aabd;
    border-radius: 4px;
    font-family: "IBM Plex Sans", sans-serif;

    box-sizing: border-box;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #a4aabd;
  }

  .loading-indicator,
  .error-message {
    font-size: 1rem;
    margin: 2rem 0;
    text-align: center;
  }
</style>
