<template>
  <form class="review-form" @submit.prevent="create()">
    <textarea class="review-form__input" v-model="review.content" />
    <button class="review-form__button">Send a message</button>
  </form>
</template>

<script setup>
import store from '../store'
import { ref } from 'vue'

let review = ref({
  name: 'Sergiy Chaiuk',
  content: ''
})

const create = () => {
  if (review.value.content.trim() === '') {
    alert('write a review')
    return
  }

  store.dispatch('createReview', review.value)
  review.value.content = ''
}

document.addEventListener('keyup', event => {
  if (event.code === 'Enter' && event.ctrlKey) {
    create()
  }
})
</script>

<style lang="scss">
.review-form {
  background: #f2f2f2;
  text-align: center;
  padding: 2rem 1.42857rem 2.42857rem 1.42857rem;

  &__input {
    display: block;
    height: 4.5rem;
    width: 100%;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 1px;
    resize: none;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.35714rem;
    color: #333333;
    padding: 0.7142857rem 1.42857rem;
    margin-bottom: 1.642857rem;
  }

  &__button {
    max-width: 20.071428rem;
    width: 100%;
    text-align: center;
    background: #fdd639;
    border-radius: 1.642857rem;
    padding: 0.92857rem 0;
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.1428571rem;
    line-height: 1.5rem;
    color: #333333;
  }
}
</style>
