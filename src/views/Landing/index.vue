<template>
  <div class="landing">
    <section class="overview">
      <OverviewSection />
    </section>

    <section class="register">
      <RegisterSection />
    </section>

    <section class="more-info">
      <MoreInfoSection />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    OverviewSection: () => import( /* webpackChunkName: "landing.overview" */ './components/Overview.vue'),
    RegisterSection: () => import( /* webpackChunkName: "landing.register" */ './components/Register.vue'),
    MoreInfoSection: () => import( /* webpackChunkName: "landing.more-info" */ './components/MoreInfo.vue'),
  },
})
export default class extends Vue {}
</script>
