<script setup lang="ts">
const emit = defineEmits<{
  (e: "update:selected-filter", selectedFilter: number): void
}>();

const ratingFilterItems = [
  { title: `all restaurants`, value: 0 },
  { title: `5 stars`, value: 5 },
  { title: `4 stars or more`, value: 4 },
  { title: `3 stars or more`, value: 3 },
  { title: `2 stars or more`, value: 2 },
  { title: `1 star or more`, value: 1 },
];

const selectedFilter = ref(0);

function onFilterUpdate() {
  emit(`update:selected-filter`, selectedFilter.value);
}
</script>

<template>
  <VCard variant="outlined">
    <VCardText>
      <div class="flex flex-wrap items-center justify-between gap-8">
        <strong>Filter the restaurants by ratings</strong>
        <VSelect
          v-model="selectedFilter"
          :items="ratingFilterItems"
          :update:model-value="onFilterUpdate()"
          variant="solo"
          hide-details="auto"
          placeholder="all restaurants"
        />
      </div>
    </VCardText>
  </VCard>
</template>
