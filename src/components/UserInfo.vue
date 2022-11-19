<template>
  <div class="user-info">
    <div class="user-info__name">{{ name }}</div>
    <div class="user-info__position">{{ position }}</div>
    <div class="user-info__offer offer">
      <div class="offer__text">{{ offer }}</div>
    </div>
    <div class="user-info__photo">
      <img :src="require(`@/${photo}`)" alt="photo" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  position: String,
  offer: String,
  photo: String
})
</script>

<style lang="scss">
.user-info {
  position: relative;
  padding-top: 1.5rem;

  &__name,
  &__position {
    font-style: normal;
    margin: 0 1.35714rem 0.142857rem 10.78571rem;
    line-height: 1.42858rem;
  }

  &__name {
    font-weight: 700;
    font-size: 1.14286rem;
    color: #333333;
  }

  &__position {
    font-weight: 400;
    font-size: 0.857143rem;
    color: #808080;
  }

  &__offer {
    background: #fffbc8;
    border: 1px solid #dadada;
    border-radius: 5px;
    margin: 0 1.35714rem 1.07143rem 7.57143rem;
  }

  &__photo {
    position: absolute;
    width: 8.85715rem;
    height: 8.85715rem;
    left: 1.21429rem;
    top: 1rem;

    & img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: contain;
    }
  }
}

.offer {
  padding: 0.4285714rem 0 0.5714285rem 3.214285rem;

  &__text {
    max-width: 14.35715rem;
    word-wrap: break-word;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.42858rem;
    color: #333333;
  }
}
</style>
