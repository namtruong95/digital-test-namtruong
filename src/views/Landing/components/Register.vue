<template>
  <div class="register">
    <h3 class="title">How can we help you?</h3>

    <p class="description">
      Let us know who you are and what you're looking for and we'll help get you
      to the right place
    </p>

    <div class="form">
      <span>
        I am <span class="iam">an Individual <i class="fas fa-chevron-down"></i></span> and I want
        <span class="want">want to learn <i class="fas fa-chevron-down"></i></span>
      </span>

      <button class="btn btn-light ml-3">Start now</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/_variables';

.register {
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  .form {
    padding: 20px;
    display: flex;
    background-color: #fff;
    width: 100%;
    justify-content: center;
    align-items: center;

    .iam,
    .want {
      color: $mainColorGreen;
      cursor: pointer;
    }

    .btn {
      color: #fff;
      background-color: $mainColorRed;
      border-radius: 20px;
    }
  }
}
</style>
