<template>
   <div class="bg">
      <div class="pt-20">
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
        <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptates, a iure itaque nostrum temporibus autem, voluptatum totam quia nam minima dolorem tempora enim vero praesentium! Provident cum id quidem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique beatae maiores provident veniam ea, deserunt, rem impedit officia voluptas architecto itaque accusantium cupiditate quibusdam iusto tempore velit eos id repudiandae?</p>
      </div>
<!-- <a href=""></a> -->
   </div>
</template>

<style>
.bg{
   background: url(https://media.istockphoto.com/id/948878628/photo/marina-of-agadir.pg?s=612x612&w=0&k=20&c=8xdwFQlwNZ0UMHatSqoQ4XzICZoP89Fd0aPkNvAGUv0=) no-repeat;
   background-size: cover;
   color: black;
   font-size: large;
   height: 100vh;
}
</style>
<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
