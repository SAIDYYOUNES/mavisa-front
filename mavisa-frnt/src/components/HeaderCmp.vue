
<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 ">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
          Ma-visa
        </a>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class=" items-center flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link
          to="/"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200
            hover:text-white
            mr-4
          "
          >Home</router-link
        >
          </li>
          <li class="nav-item">
            <router-link
          to="/apply"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200
            hover:text-white
            mr-4
          "
          >Apply</router-link
        >
          </li>
          <li class="nav-item">
            <router-link
          to="/about"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200
            hover:text-white
            mr-4
          "
          >About</router-link
        >
          </li>
          <li class="nav-item">
            <router-link
          to="/check"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200
            hover:text-white
            mr-4
          "
          >Apply-statu</router-link
        >
          </li>
          <li class="nav-item">
            <router-link
          to="/apply"
          class="
            inline-block
            text-sm
            px-4
            py-2
            
            border
            rounded
            
            text-white
            border-white
            hover:border-transparent hover:text-teal-500 hover:bg-white
            mt-4
            lg:mt-0
          "
          >Get-started</router-link
        >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>