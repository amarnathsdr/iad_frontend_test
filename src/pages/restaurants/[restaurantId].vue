<script setup lang="ts">
import { useFetchRestaurant } from '~/composables/restaurants';
import { formattedPhoneNumber } from '~/helpers/formating';
import { averageRating } from '@/src/helpers/rating';

const { params } = useRoute();
const { data: restaurant, isError } = useFetchRestaurant({ restaurantId: params.restaurantId });
</script>

<template>
  <VAlert v-if="isError" type="warning" class="mt-4">
    Error occured while fetching the data
  </VAlert>
  <div v-else class="grid md:grid-cols-[minmax(0,_1fr)_16rem] gap-6">
    <VCard v-if="restaurant">
      <VImg
        v-for="photo in restaurant.photos"
        :key="photo"
        :src="restaurant.photos[0]"
        height="250"
        cover
        gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <VCardTitle class="!text-4xl text-white">
          {{ restaurant.name }}
        </VCardTitle>
        <VRating
          class="mx-3"
          :model-value="averageRating(restaurant.reviews)"
          density="compact"
          readonly
        />
      </VImg>
      <VCardText>
        <div class="grid grid-cols-2 gap-4">
          <RestaurantLocation :location="restaurant.location" />
          <KeyValue icon="mdi-phone">
            <p class="text-body-1">
              {{ formattedPhoneNumber(restaurant.phone) }}
            </p>
          </KeyValue>
        </div>
      </VCardText>
    </VCard>
    <aside>
      <ul class="pa-0">
        <RestaurantReview :reviews="restaurant?.reviews" />
      </ul>
    </aside>
  </div>
</template>
