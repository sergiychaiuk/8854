<template>
  <div class="reviews">
    <div class="reviews__panel">
      <div class="reviews__item">
        <div class="reviews__title">{{ title }}</div>
        <button class="reviews__btn" @click="toggleAllReviews()">{{ titleBtn }}</button>
      </div>

      <div class="reviews__item">
        <div class="likes">
          <div class="likes__icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_di_9068_33)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.99441 10.7136C6.01753 10.735 6.02964 10.7461 6.02964 10.7461L6.02947 10.681C6.70429 10.0532 12.0107 5.05023 11.9888 2.98327C11.9652 0.775808 10.5617 -0.0226816 8.96488 0.000488394C7.45338 0.0231885 6.1314 1.32853 5.99439 1.46801C5.85737 1.32853 4.53537 0.0231885 3.02404 0.000488394C1.42727 -0.0226816 0.0235557 0.775808 6.77177e-05 2.98327C-0.0218521 5.05023 5.28453 10.0532 5.95935 10.681L5.95919 10.7461C5.95919 10.7461 5.97129 10.735 5.99441 10.7136Z"
                  fill="#333333"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.99441 10.7136C6.01753 10.735 6.02964 10.7461 6.02964 10.7461L6.02947 10.681C6.70429 10.0532 12.0107 5.05023 11.9888 2.98327C11.9652 0.775808 10.5617 -0.0226816 8.96488 0.000488394C7.45338 0.0231885 6.1314 1.32853 5.99439 1.46801C5.85737 1.32853 4.53537 0.0231885 3.02404 0.000488394C1.42727 -0.0226816 0.0235557 0.775808 6.77177e-05 2.98327C-0.0218521 5.05023 5.28453 10.0532 5.95935 10.681L5.95919 10.7461C5.95919 10.7461 5.97129 10.735 5.99441 10.7136Z"
                  fill="#73B4D5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_di_9068_33"
                  x="0"
                  y="0"
                  width="11.9888"
                  height="11.7461"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_9068_33"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_9068_33"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-1" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                  <feBlend mode="normal" in2="shape" result="effect2_innerShadow_9068_33" />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="likes__text">{{ likes }}</div>
        </div>
        <div class="comments">
          <div class="comments__icon">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_di_9068_27)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 -0.00106812H1C0.447728 -0.00106812 0 0.446852 0 0.998964V7.999C0 8.55132 0.447728 8.99892 1 8.99892H6.24995L9.99997 12.7489V8.99892H12C12.5523 8.99892 13 8.55132 13 7.999V0.998964C13 0.446852 12.5523 -0.00106812 12 -0.00106812Z"
                  fill="#B3B3B3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 -0.00106812H1C0.447728 -0.00106812 0 0.446852 0 0.998964V7.999C0 8.55132 0.447728 8.99892 1 8.99892H6.24995L9.99997 12.7489V8.99892H12C12.5523 8.99892 13 8.55132 13 7.999V0.998964C13 0.446852 12.5523 -0.00106812 12 -0.00106812Z"
                  fill="#73B4D5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_di_9068_27"
                  x="0"
                  y="-0.00106812"
                  width="12.9999"
                  height="13.7499"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_9068_27"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_9068_27"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-1" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                  <feBlend mode="normal" in2="shape" result="effect2_innerShadow_9068_27" />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="comments__text">{{ reviews.length }}</div>
        </div>
      </div>
    </div>

    <div class="reviews__comment comment" v-for="review in reviewsList" :key="review.id">
      <div class="comment__name">{{ review.name }}</div>
      <div class="comment__date">{{ formattedDate(review.date) }}</div>
      <div class="comment__content">{{ review.content }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import moment from 'moment'

// eslint-disable-next-line vue/no-setup-props-destructure
const { reviews, likes } = defineProps({ reviews: Array, likes: Number })

let allReviews = ref(false)
const title = computed(() => (allReviews.value ? 'All reviews' : 'Latest reviews'))
const titleBtn = computed(() => (allReviews.value ? 'Latest reviews' : 'All reviews'))

const reviewsList = computed(() =>
  allReviews.value ? sortByDate([...reviews]) : sortByDate([...reviews]).slice(0, 3)
)

const formattedDate = date => {
  return moment(new Date(date)).format('D MMM YYYY')
}

const sortByDate = reviews => {
  return reviews.sort((a, b) => moment(new Date(b.date)).diff(moment(new Date(a.date))))
}

const toggleAllReviews = () => {
  allReviews.value = !allReviews.value
}
</script>

<style lang="scss">
.reviews {
  &__panel {
    display: flex;
    justify-content: space-between;
    margin: 0 1.42857rem 0.92857rem 1.42857rem;
  }

  &__item {
    display: flex;
  }

  &__title {
    margin-right: 0.5714285rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.14286rem;
    line-height: 1.14286rem;
    color: #333333;
  }

  &__btn {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.14286rem;
    text-decoration-line: underline;
    color: #005da1;
    background: none;
  }

  &__comment {
    margin: 0 1.42857rem 1.21429rem 1.42857rem;
  }

  &__comment:last-child {
    margin: 0 1.42857rem 1.5714285rem 1.42857rem;
  }
}

.likes,
.comments {
  display: flex;

  &__icon {
    display: flex;
    align-items: center;
    margin-right: 0.2857142rem;
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 0.857143rem;
    line-height: 1rem;
    color: #333333;
  }
}

.likes {
  &__text {
    margin-right: 1.1428571rem;
  }
}

.comment {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &__name {
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.35714rem;
    color: #333333;
    margin-right: 0.5714285rem;
  }

  &__date {
    font-style: normal;
    font-weight: 400;
    font-size: 0.7857142rem;
    line-height: 1.35714rem;
    color: #808080;
  }

  &__content {
    position: relative;
    width: 100%;
    margin-top: 0.7142857rem;
    padding: 0.7142857rem 1.42857rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.35714rem;
    color: #333333;
    background: #f2fbff;
    border: 1px solid #c4cbcf;
    box-shadow: 0 4px 10px rgba(128, 128, 128, 0.1);
  }

  &__content:before,
  &__content:after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: 1.55rem;
    top: -0.714rem;
    border: 0.358rem solid;
    border-color: transparent transparent #c4cbcf #c4cbcf;
  }

  &__content:after {
    left: 1.61rem;
    top: -0.544rem;
    border-color: transparent transparent #f2fbff #f2fbff;
  }
}
</style>
