<template>
  <div class="header-top">
    <div class="search">
      <i class="fas fa-search"></i>
      <span class="ml-3">Searh</span>
    </div>

    <div class="extend">
      <div class="learn">Learn</div>
      <div class="donate">Donate</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

.header-top {
  align-items: center;
  border-bottom: 1px solid $borderColor;
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  .search {
    align-items: center;
    border-color: $borderColor;
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-top-width: 0;
    border-bottom-width: 0;
    display: flex;
    font-weight: 700;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  .extend {
    display: flex;
    height: 100%;

    .donate,
    .learn {
      width: 100px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .donate {
      color:  #fff;
      background-color: $mainColorRed;
    }

    .learn {
      border-left: 1px solid #ddd;
      border-bottom: 4px solid rgb(2, 80, 2);;
    }
  }
}
</style>
