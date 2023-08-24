<template>
  <div class="navbar">
    <div class="logo-brand">
      <img
        src="https://avatars3.githubusercontent.com/u/37439169?s=200&v=4"
        alt="Logo"
        class="logo"
      />
      <h1 class="brand">DEV APP</h1>
    </div>
    <div class="nav-links">
      <router-link to="/" class="nav-link" exact-active-class="active"
        >Home</router-link
      >
      <router-link to="/customers" class="nav-link" exact-active-class="active"
        >Customers</router-link
      >
    </div>
    <div class="user-section" @click="showLogoutMenu = !showLogoutMenu">
      <img
        src="https://files.startdeliver.com/accid-aa909493a6679e232a361e2a501179b4/611d57c1d8af8f2671ed9c25fb38331b"
        alt="User Avatar"
        class="avatar"
      />
      <div v-if="showLogoutMenu" class="dropdown">
        <button @click="logout">Log out</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showLogoutMenu: false,
      };
    },
    methods: {
      logout() {
        this.showLogoutMenu = false;
        this.$router.push("/logged-out");
      },
    },
  };
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #eff3f8;
    color: #1a1818;

    box-shadow: 0 4px 8px rgba(226, 205, 205, 0.1);
  }

  .logo-brand {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }

  .brand {
    font-family: "Lato", sans-serif;
    color: #1c2c54;
    font-size: 17px;
    margin: 0;
  }

  .nav-links {
    display: flex;
    gap: 15px;
  }

  .nav-link {
    text-decoration: none;
    color: #1a1717;
    transition: color 0.3s;
  }

  .nav-link:hover {
    color: #555862;
  }

  .active {
    font-weight: bold;
  }

  .user-section {
    position: relative;
    cursor: pointer;
  }

  .avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 100%;
    right: 0;

    padding: 1px;
    min-width: 100px;
    border-radius: 5px;
  }

  .user-section:hover .dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  button {
    padding: 8px 12px;
    background-color: #f3e8e8;
    box-shadow: 0 4px 8px rgba(226, 205, 205, 0.1);
    color: #262424;
    font-weight: 900;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
    border-radius: 5px;
    text-align: center;
  }

  button:hover {
    background-color: #d9dde9;
  }

  .dropdown::before {
    content: "";
    position: absolute;
    top: -7px;
    right: 10px;
    border-width: 0 5px 7px 5px;
    border-color: transparent transparent #ffffff transparent;
    display: block;
    width: 0;
    z-index: -1;
  }
</style>
