<script setup lang="ts">
import { type Review } from '~/composables/restaurants';

defineProps<{
  reviews?: Review[]
}>();
</script>

<template>
  <VCard class="va-company-review" tag="li">
    <VCardText>
      <div v-for="review in reviews" :key="review.id" class="p-2">
        <VRating
          :model-value="review.rating"
          density="compact"
          readonly
        />
        <VSpacer />
        <span>{{ review.text }}</span>
      </div>
    </VCardText>
  </VCard>
</template>
