<template>
    <div>
      <h1>fill your info down below</h1>
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
    }
  }
  </script>
  