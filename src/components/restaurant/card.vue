<script setup lang="ts">
import { type Restaurant } from '~/composables/restaurants';
import { averageRating } from '@/src/helpers/rating';

defineProps<{
  restaurant: Restaurant
}>();
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
      :model-value="averageRating(restaurant?.reviews)"
      density="compact"
      readonly
      class="mx-3"
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
