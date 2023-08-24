<template>
  <div class="home">
    <h2>Home</h2>

    <div v-if="loading" class="loading-indicator">Loading...</div>
    <div v-if="error" class="error-message">{{ error }}</div>

    <div v-if="report" class="report-section">
      <div class="report-card" v-for="data in report" :key="data.month">
        <h3>{{ formatMonth(data.month) }}</h3>
        <div class="data-section">
          <div class="data-item">
            <span class="data-label">ARR:</span>
            <span class="data-value">${{ data.arr.toLocaleString() }}</span>
          </div>
          <div class="data-item">
            <span class="data-label">Seats:</span>
            <span class="data-value">{{ data.seats }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        report: null,
        loading: true,
        error: null,
      };
    },
    mounted() {
      fetch("https://startdeliver-mock-api.glitch.me/report")
        .then((response) => response.json())
        .then((data) => {
          this.report = data.data;
          this.loading = false;
        })
        .catch((err) => {
          this.error = "Error fetching report: " + err.message;
          this.loading = false;
        });
    },
    methods: {
      formatMonth(dateString) {
        const options = { year: "numeric", month: "long" };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
    },
  };
</script>

<style scoped>
  .home {
    padding: 2rem;
    background-color: #f7f7f9;
    font-family: "IBM Plex Sans", sans-serif;
  }

  h2 {
    margin-bottom: 1.5rem;
    color: #2050fe;
  }

  .loading-indicator,
  .error-message {
    font-size: 1rem;
    margin: 2rem 0;
    text-align: center;
  }

  .report-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .report-card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #1c2c54;
  }

  .data-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .data-item {
    display: flex;
    justify-content: space-between;
  }

  .data-label {
    color: #a4aabd;
  }

  .data-value {
    font-weight: 500;
  }
</style>
