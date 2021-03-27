<template>
  <div class="navbar">
    <div class="logo">
      <router-link :to="{ name: 'Landing' }">
        <img src="/img/logo/logo.png" height="40" alt="Logo" />
      </router-link>
    </div>

    <ul class="nav justify-content-end">
      <li class="nav-item" v-for="(route, index) in navbars" :key="index">
        <router-link
          class="nav-link"
          :to="{ name: route.name }"
          :linkActiveClass="'active'"
          >{{ route.meta && route.meta.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NavbarModule } from "@/store/modules/navbar";
import { RouteConfig } from "vue-router";

@Component({
  components: {},
})
export default class extends Vue {
  public get navbars(): RouteConfig[] {
    return NavbarModule.routes;
  }
}
</script>

<style scoped lang="scss">
.navbar {
  height: 70px;
}

.nav-link {
  color: #000;
  font-weight: 700;

  &.router-link-active {
    border-bottom: 1px solid;
  }
}
</style>
