<script setup lang="ts">
import { useFetchRestaurants } from '~/composables/restaurants';
import { type Restaurant } from '~/composables/restaurants';
import { averageRating } from '@/src/helpers/rating';

const { data: restaurants, isError } = useFetchRestaurants();

const selectedFilter = ref(0);

const restaurantFilterByRating = computed(() => {
  return restaurants.value?.filter((restaurant: Restaurant) => {
    return averageRating(restaurant.reviews) >= selectedFilter.value;
  });
});
</script>

<template>
  <div>
    <RatingFilter @update:selected-filter="selectedFilter = $event" />
    <LoadingError v-if="isError" />
    <div v-else-if="restaurants" class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <RestaurantCard
        v-for="restaurant of restaurantFilterByRating"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </div>
  </div>
</template>
