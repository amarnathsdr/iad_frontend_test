import { formattedPhoneNumber } from '~/helpers/formating';

describe(`formattedPhoneNumber`, () => {
  it(`should return the original phone number if it does not start with +49`, () => {
    const result = formattedPhoneNumber(`0123456789`);
    expect(result).toEqual(`0123456789`);
  });

  it(`should return the correct format if it starts with +49`, () => {
    const result = formattedPhoneNumber(`+49123456789`);
    expect(result).toEqual(`0123456789`);
  });
});
