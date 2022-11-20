<template>
  <form class="review-form" @submit.prevent="create()">
    <textarea class="review-form__input" v-model="review.content" />
    <button class="review-form__button">Send a message</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['onReviewSubmit'])

const review = ref({
  name: 'Sergiy Chaiuk',
  content: ''
})

const create = () => {
  if (review.value.content.trim() === '') {
    /*alert('write a review')*/
    return
  }

  emit('onReviewSubmit', review.value)

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
  padding: 1.75rem 1.25rem 2.125rem 1.25rem;

  &__input {
    display: block;
    height: 3.9375rem;
    width: 100%;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 1px;
    resize: none;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.1875rem;
    color: #333333;
    padding: 0.75rem 1.25rem 0.625rem 1.25rem;
    margin-bottom: 1.4375rem;
  }

  &__button {
    max-width: 17.5625rem;
    width: 100%;
    text-align: center;
    background: #fdd639;
    border-radius: 1.4375rem;
    padding: 0.8125rem 0;
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3125rem;
    color: #333333;
  }
}
</style>
