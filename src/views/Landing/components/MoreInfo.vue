<template>
  <div class="more-info">
    <h3 class="text-left title">What do we do?</h3>
    <p class="text-left">
      You might not have heard of us, but we're the people behind the following
      impactful programers.
    </p>
    <div class="cards">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Get online week</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-readmore">Read more</a>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Learn my way</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-readmore">Read more</a>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Make it click</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-readmore">Read more</a>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Digital you</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-readmore">Read more</a>
        </div>
      </div>
    </div>

    <div class="more">
      <button class="btn btn-more">More about what we do</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/_variables';

.more-info {
  background-color: $mainColorGreen;
  padding: 40px;
  color: #fff;

  .cards {
    display: flex;

    .card {
      color: #000;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &:not(:first-child) {
        margin-left: 10px;
      }
    }

    .btn-readmore {
      color: $mainColorRed;
      background-color: #fff;
      border-radius: 20px;
      border: 2px solid #000;
      font-weight: 700;
    }
  }

  .more {
    margin-top: 40px;

    .btn-more {
      background-color: #fff;
      color: $mainColorRed;
      border-radius: 20px;
      font-weight: 700;
    }
  }
}
</style>
