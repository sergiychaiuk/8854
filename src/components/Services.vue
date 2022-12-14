<template>
  <div class="services">
    <div class="services__title">Services</div>
    <div class="services__chart">
      <div class="chart">
        <div class="chart__bar-list">
          <div class="chart__bar bar" v-for="service in serviceList" :key="service.id">
            <div
              class="bar__line"
              :class="[service.number === maxService.number ? 'bar_green' : 'bar_blue']"
              :style="{ width: service.percentage + '%' }"
            ></div>
            <div class="bar__title">{{ service.title }}</div>
          </div>
        </div>

        <div class="chart__number">
          <div class="chart__number-title" v-for="service in serviceList" :key="service.id">
            {{ service.number }}
          </div>
        </div>
      </div>
    </div>

    <div class="services__total total">
      <div class="total__title">Total</div>
      <div class="total__number">{{ total }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// eslint-disable-next-line vue/no-setup-props-destructure
const { services } = defineProps({ services: Array })

const maxService = computed(() =>
  services.reduce((acc, curr) => (acc.number > curr.number ? acc : curr))
)

const getBarPercentage = (number, maxNumber) => (number * 100) / maxNumber

const serviceList = computed(() =>
  services.map(el => ({ ...el, percentage: getBarPercentage(el.number, maxService.value.number) }))
)

const total = computed(() => serviceList.value.reduce((sum, service) => sum + service.number, 0))
</script>

<style lang="scss">
.services {
  &__title {
    margin: 0 1.25rem 0.5rem 9.4375rem;
    padding-right: 1.5rem;
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    color: #333333;
  }

  &__chart {
    margin: 0 1.25rem 0.5625rem 9.4375rem;
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    padding: 1rem 0;
  }

  &__total {
    margin: 0 3.875rem 1.125rem 9.4375rem;
  }
}

.chart {
  display: flex;
  justify-content: space-between;
  padding-right: 2.5rem;

  &__bar-list {
    width: 100%;
    border-left: 1px solid rgba(51, 51, 51, 0.2);
    margin-right: 2.875rem;
  }

  &__bar {
    margin-bottom: 0.125rem;
  }

  &__bar:last-child {
    margin-bottom: 0;
  }

  &__number {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  &__number-title {
    font-style: normal;
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 0.9375rem;
    color: #333333;
  }
}

.bar {
  position: relative;
  height: 1.5rem;

  &__line {
    height: 100%;
    border-radius: 0 3px 3px 0;
  }

  &_green {
    background: #b1e19b;
  }

  &_blue {
    background: #ace2f8;
  }

  &__title {
    position: absolute;
    top: -0.125rem;
    left: 0.375rem;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8125rem;
    line-height: 1.625rem;
    color: #333333;
  }
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title,
  &__number {
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color: #333333;
  }

  &__title {
    line-height: 1.625rem;
  }

  &__number {
    line-height: 0.9375rem;
  }
}
</style>
