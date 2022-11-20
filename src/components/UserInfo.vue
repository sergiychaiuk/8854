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
  padding-top: 1.3125rem;

  &__name,
  &__position {
    font-style: normal;
    margin: 0 1.25rem 0.125rem 9.4375rem;
    line-height: 1.25rem;
  }

  &__name {
    font-weight: 700;
    font-size: 1rem;
    color: #333333;
  }

  &__position {
    font-weight: 400;
    font-size: 0.75rem;
    color: #808080;
  }

  &__offer {
    background: #fffbc8;
    border: 1px solid #dadada;
    border-radius: 5px;
    margin: 0 1.25rem 0.9375rem 6.625rem;
  }

  &__photo {
    position: absolute;
    width: 7.75rem;
    height: 7.75rem;
    left: 1.0625rem;
    top: 0.875rem;

    & img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: contain;
    }
  }
}

.offer {
  padding: 0.375rem 0 0.5rem 2.8125rem;

  &__text {
    max-width: 12.5625rem;
    word-wrap: break-word;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #333333;
  }
}
</style>
