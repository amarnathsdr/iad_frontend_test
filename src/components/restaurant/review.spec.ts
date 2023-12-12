import { mount } from '@vue/test-utils';

import RestaurantReview from './review.vue';
import { type Review } from '~/composables/restaurants';
import restaurantsResponse from '@/mock/restaurants.json';

const reviews = restaurantsResponse[0].reviews as Review[];

describe(`restaurant-review`, () => {
  test(`no props`, (context) => {
    const wrapper = mount(RestaurantReview, {
      global: { plugins: [context.router] },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`renders a review`, (context) => {
    const wrapper = mount(RestaurantReview, {
      global: { plugins: [context.router] },
      props: { reviews },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
