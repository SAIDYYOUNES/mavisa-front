<script >
export default {
  name: "DossierForm",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      data: {
        nom: "",
        prenom: "",
        date_naissance: "",
        situation_familiale: "",
        adress: "",
        date_depart: "",
        date_darrive: "",
        type_pass: "",
        num_pass: "",
        nationalite: "",
        type_visa: "",
        reff: "",
      },
    };
  },
  methods: {
    addUser() {
      console.log(this.data);
      fetch("http://localhost/MaVisa-backend/dossiers/add", {
        method: "POST",
        body: JSON.stringify(this.data),
      })
        .then((res) => res.json())
        .then(message=> {
        if(confirm(`your code is ${message.code} save it to complete your process`)) {window.location.href = "/check"}})
        .catch((err) => {
          console.log(err);
        });

    },
  },
};
</script>

<template>
  <div class="greetings my-20">
   <form @submit.prevent="addUser" class=" px-6 flex flex-col items-start">
        <label>nom:</label>
        <input type="text" v-model="data.nom">
        <label>prenom:</label>
        <input type="text" v-model="data.prenom">
        <label>birth day:</label>
        <input type="text" v-model="data.date_naissance">
        <label>family situation:</label>
        <input type="text" v-model="data.situation_familiale">
        <label>adresse:</label>
        <input type="text" v-model="data.adress">
        <label>date de depart:</label>
        <input type="text" v-model="data.date_depart">
        <label>date de retour:</label>
        <input type="text" v-model="data.date_darrive">
        <label>type de pass:</label>
        <input type="text" v-model="data.type_pass">
        <label>numero de pass:</label>
        <input type="text" v-model="data.num_pass">
        <label>nationalite</label>
        <input type="text" v-model="data.nationalite">
        <label>visa type:</label>
        <input type="text" v-model="data.type_visa">
        <input type="submit" value="add me">
      </form>
  </div>
</template>

<style scoped>
input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.flex {
  display: flex;
  flex-direction: column;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
