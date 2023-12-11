<script setup lang="ts">
import { type Restaurant, type Review } from '~/composables/restaurants';

const props = defineProps<{
  restaurant: Restaurant
}>();

const averageRating = computed(() => {
  const reviews = props.restaurant.reviews;
  if (reviews.length === 0) return 0;
  const sumOfRating = reviews.reduce((total: number, review: Review) => total + review.rating, 0);
  return sumOfRating / reviews.length;
});
</script>

<template>
  <VCard>
    <VImg
      height="100"
      cover
      :src="restaurant?.photos?.[0]"
    />
    <VCardTitle>
      {{ restaurant?.name }}
    </VCardTitle>
    <VRating
      class="mx-3"
      :model-value="averageRating"
      density="compact"
      readonly
    />
    <VCardText>
      <RestaurantLocation :location="restaurant?.location" />
    </VCardText>
    <VCardActions class="mt-auto">
      <VBtn color="primary" variant="tonal" :to="`/restaurants/${restaurant?.id}`">
        see more
      </VBtn>
    </VCardActions>
  </VCard>
</template>
