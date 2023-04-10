<template>
    <div>
      <h1 class="font-xl">fill your info down below</h1>
    </div>
    <DossierForm />
  </template>
  <script>
  // @ is an alias to /src
  
  import DossierForm from '../components/DossierForm.vue';
  
  export default {
    name: 'ApplyView',
    components: {
        DossierForm,
    },
    mounted() {
    if(localStorage.getItem("user")){
        window.location.href = "/profil"
    }
    
  },
  }
  </script>
  