<template>
  <div class="container">
    <UserInfo :name="user.name" :position="user.position" :offer="user.offer" :photo="user.photo" />
    <Services :services="user.services" />
    <Reviews :reviews="user.reviews" :likes="user.likes" />
    <ReviewForm @onReviewSubmit="onReviewSubmit" />
  </div>
</template>

<script setup>
import store from '../store'
import { computed } from 'vue'

import UserInfo from '../components/UserInfo.vue'
import Services from '../components/Services.vue'
import Reviews from '../components/Reviews.vue'
import ReviewForm from '../components/ReviewForm.vue'

const user = computed(() => store.state.user)

const onReviewSubmit = review => {
  store.dispatch('createReview', review)
}
</script>
