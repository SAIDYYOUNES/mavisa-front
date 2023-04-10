<template>
    <div class="flex flex-wrap justify-around pt-8">
        <div class="flex flex-col justify-around bg-teal-500 rounded">
            <form @submit.prevent="getUser" class="flex flex-col justify-arround p-4" action="">
                <label class="text-white" for="">enter your refference</label>
                <input type="text" v-model="reff">
                <button  >submit</button>
                <!-- <input type="button"> -->
            </form>
    
        </div>
        <img class="w-2/3 h-2/3" src="../assets/img/ffd2d7be-f483-4739-9cdc-8d2b20b6a4ac.jpg" alt="">
    </div>
</template>
<script >

export default {
  name: "DossierForm",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      data: {
      
        reff: "",
      },
    };
  },
  mounted(){
    if(localStorage.getItem("user")){
    window.location.href = "/profil"
}
  },
  methods: {

    getUser() {
      fetch(`http://localhost/MaVisa-backend/dossiers/check/${this.reff}`)
        .then(response => response.json())
        .then(response => { 
          if(response.verify==false){

            if(confirm(` ${response.message} check your reff and try again`)) {window.location.href = "/check"}
          }else{
            console.log(response.data.reff);
            const a = response.data.reff;
            const b = response.data.id;

            localStorage.setItem('user',a) 
            localStorage.setItem('user_id',b) 
            window.location.href = "/profil"

          }
    
    })
       
        .catch(err => {
            
          console.log(err);
        });
    },
  },
};
</script>