<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <div v-for="client in clients">
      <H3>{{ client.nom }}</H3>
      <H3>{{ client.prenom}}</H3> -->
      <!-- <H3>{{ client. }}</H3>
      <H3>{{ client.nom }}</H3>
      <H3>{{ client.nom }}</H3>
      <H3>{{ client.nom }}</H3> -->
<!--       
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  components: {
   
  },
  data() {
    return {
   
      clients:[]
    }
  },
  methods: {
    getUsers() {
      console.log("a")
      fetch("http://localhost/MaVisa-backend/")
        .then(response => response.json())
        .then(response => {
          console.log(response.Data);

          this.clients = response;
          const a = JSON.parse(response.Data.id) 
          localStorage.setItem('data',a)
        })
        .catch(err => {
          console.log(err);
        });
    },
  

  },
  mounted() { 
    this.getUsers()
  }

}
</script>
