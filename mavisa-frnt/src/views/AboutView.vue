<template>
  <div>
    <input
      type="date"
      @change="getdate()"
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
  </div>
</template>

<script>
// import $ from 'jquery';
// import 'jquery-ui/ui/widgets/datepicker.js';
// import 'jquery-ui/themes/base/datepicker.css';

export default {
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
      },
    };
  },
  mounted() {
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
  },
  methods: {
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
      console.log("getdate function completed");
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
  },
};
</script>