<template>
  <div>
    <div class="mt-20 bg-gray-200 mx-8 py-6">
      <button
        @click="logout"
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        logout
      </button>
      <form action="">
        <button
          v-show="data.verify"
          @click="deleterdv"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          delete my rdv
        </button>
      </form>
      <a href="/update"
        ><button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          update your profil
        </button></a
      >
      <h1>BOnjour Mr/mdm :{{ user.nom }}</h1>
      <h1>your refference is :{{ user.reff }}</h1>
      <div v-show="data.verify">
        <h1>your appointement is in :{{ user.RDV }}</h1>

        <h3 v-show="user.p1">at: 9:00</h3>
        <h3 v-show="user.p2">at: 10:30</h3>
        <h3 v-show="user.p3">at: 14:00</h3>
        <h3 v-show="user.p4">at: 15:30</h3>
      </div>
    </div>
    <div>
      <div v-show="!data.verify" class="pt-10 flex justify-center">
        <form action="" class="flex flex-col w-2/4">
          <!-- <input type="date" @input="getdate"  name=""
            id="" v-model="data.date" 
             > -->
          <input
            type="date"
            @input="  getdate()"
            name=""
            id=""
            v-model="data.date"
            class="datepicker"  
          />
          <select
            v-model="data.periode"
            id=""
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          >
            <option value=""></option>
            <option :disabled="data.p1" value="p1">9:00-10:30</option>
            <option :disabled="data.p2" value="p2">10:30-12:00</option>
            <option :disabled="data.p3" value="p3">14:00-15:30</option>
            <option :disabled="data.p4" value="p4">15:30-17:00</option>
          </select>

          <button
            @click="addrdv"
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            select date
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  //   name: "DossierForm"
  components: {
    // HelloWorld,
  },
  data() {
    return {
      data: {
        verify: "",

        p1: "",
        p2: "",
        p3: "",
        p4: "",
        periode: "",

        date: "",
        reff: localStorage.getItem("user"),
        user_id: localStorage.getItem("user_id"),
      },
      user: [],
    };
  },

  //   minDate() {
  //     // Get today's date
  //     const today = new Date();

  //     // Format the date as a string in the YYYY-MM-DD format required by the input element
  //     const year = today.getFullYear();
  //     const month = today.getMonth() + 1;
  //     const day = today.getDate();
  //     const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

  //     return formattedDate;
  //   },
  //   maxDate() {
  //     // Get today's date
  //     const today = new Date();

  //     // Add 3 months to today's date
  //     const maxDate = new Date(today.getFullYear(), today.getMonth() + 4, 0);

  //     // Format the date as a string in the YYYY-MM-DD format required by the input element
  //     const year = maxDate.getFullYear();
  //     const month = maxDate.getMonth() + 1;
  //     const day = maxDate.getDate();
  //     const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

  //     // Return the formatted date as the maximum selectable date
  //     return formattedDate;
  //   }
  // },
  async mounted() {
    this.getfulldates().then((disabledDates) => {
      var today = new Date();
      var maxDate = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());
      $('.datepicker').datepicker({
        minDate: today,
        maxDate: maxDate,
        dateFormat: "yy-mm-dd",
        beforeShowDay: function (date) {
          var dateString = $.datepicker.formatDate("yy-mm-dd", date);
          return [disabledDates.indexOf(dateString) === -1];
        },
        onSelect: (date) => {
          this.data.date = date;
          this.getdate();
        },
      });
    });

    if (!localStorage.getItem("user")) {
      window.location.href = "/check";
    }
    await this.verifyreff();
    // console.log(this.data.verify);
    if (!this.data.verify) {
      await this.getUser();
      // console.log(2);
    } else {
      console.log(11);
      await this.getUserwithrdv();
    }
  },

  methods: {
    async getUser() {
      var result = await fetch(
        `http://localhost/MaVisa-backend/dossiers/check/${localStorage.getItem(
          "user"
        )}`
      );
      const user = await result.json();
      console.log(user.data);
      this.user = "";
      this.user = user.data;
    },
    async getfulldates() {
      var result = await fetch(
        `http://localhost/MaVisa-backend/dossiers/getfulldays`
      );
      const fulldates = await result.json();

      const fdates = [];
      for (let i = 0; i < fulldates[0].length; i++) {
        fdates.push(fulldates[0][i].RDV);
      }

      console.log(fdates);
      return fdates;
    },
    async getUserwithrdv() {
      var result = await fetch(
        `http://localhost/MaVisa-backend/dossiers/show/${localStorage.getItem(
          "user"
        )}`
      );
      const user = await result.json();
      // console.log(user.data);
      // console.log(1);
      this.user = "";
      this.user = user.data;
    },
    async deleterdv() {
      var result = await fetch(
        `http://localhost/MaVisa-backend/dossiers/deleterdv/${localStorage.getItem(
          "user"
        )}`
      );
      const message = await result.json();
      // console.log(user.data);
      confirm(` ${message.message}`);
    },
    async verifyreff() {
      var result = await fetch(
        `http://localhost/MaVisa-backend/dossiers/verify/${localStorage.getItem(
          "user"
        )}`
      );
      const reff = await result.json();
      this.data.verify = reff[0].verify;
      // console.log(reff[0].verify);

      return reff[0].verify;
    },
    async getdate() {
  var result = await fetch(
    `http://localhost/MaVisa-backend/dossiers/getrdv/${this.data.date}`
  );
  const data = await result.json();
  if (data[0] != false) {
    this.data = data[0];
    this.data.date = data[0].rdv;
  } else {
    this.data.p1 = false;
    this.data.p2 = false;
    this.data.p3 = false;
    this.data.p4 = false;
  }
  console.log(this.data.date);
  console.log('getdate function completed');
},
    logout() {
      localStorage.removeItem("user");
      window.location.href = "/check";
    },
    addrdv() {
      const requestData = {
        date: this.data.date,
        periode: this.data.periode,
        reff: localStorage.getItem("user"),
      };
      fetch("http://localhost/MaVisa-backend/dossiers/addrdv", {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((res) => res.json())
        .then((res) => confirm(`your appointemets is at ${this.data.date}`));

      // this.data.verify=true
    },
  },
};
</script>