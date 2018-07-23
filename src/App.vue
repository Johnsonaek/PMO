<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
   import Header from '@/components/header.vue';
   
   export default {
     name: 'app',
     components: {
       Header
     }
   }
</script>
<style>
#app {
   height: inherit;
}
</style>
