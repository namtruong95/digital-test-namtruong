<template>
  <div class="overview">
    <div class="overview1">
      <h1 class="title">Get online week 2021</h1>
      <p class="description">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem
        Ipsum Lorem
      </p>
      <button class="btn btn-light btn-involved">Get involved now!</button>
    </div>

    <div class="overview2">
      <div class="left">
        <img src="/img/overview2.png" height="300" alt="overview2" />
      </div>
      <div class="right">
        <h2>
          We are a social change charity, helping peopel to improve their lives
          throwgh digial
        </h2>
        <p>
          We tackle the most pressing issues of our thme, working with partners
          in thousands of communities across the UK and further afield
        </p>
        <button class="btn btn-light">Learn more about us</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/_variables';

.overview1 {
  background-image: url("/img/overview1.png");
  background-repeat: no-repeat;
  height: 400px;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;

  .title {
    font-weight: 700;
    color: #fff;
    background-color: $mainColorGreen;
    width: 100%;
    padding: 5px;
    width: 450px;
    margin-bottom: 1rem;
  }

  .description {
    width: 350px;
    background: #fff;
    padding: 10px;
    margin-bottom: 1rem;
    text-align: start;
    color: $mainColorGreen2;
    font-weight: 400;
  }

  .btn-involved {
    width: 200px;
    color: $mainColorRed;
    border-radius: 20px;
    font-weight: 700;
  }
}

.overview2 {
  display: flex;

  .left,
  .right {
    flex: 50%;
  }

  .left {
    img {
      width: 100%;
    }
  }

  .right {
    background-color: $mainColorGreen2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    text-align: start;
    padding: 20px;
    color: #fff;

    .btn {
      background-color: $mainColorGreen2;
      border-radius: 20px;
      border: 1px solid #fff;
      color: #fff;
      font-weight: 400;
    }
  }
}
</style>
