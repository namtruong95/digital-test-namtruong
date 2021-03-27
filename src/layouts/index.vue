<template>
  <div class="container">
    <HeaderTop />
    <Navbar />

    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Navbar: () => import("./Navbar.vue"),
    HeaderTop: () => import("./HeaderTop.vue"),
  },
})
export default class extends Vue {}
</script>
