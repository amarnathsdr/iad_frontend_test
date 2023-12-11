export function formattedPhoneNumber(phoneNumber: string): string {
  if (!phoneNumber.startsWith(`+49`)) return phoneNumber;

  const numberWithoutCountryCode = phoneNumber.slice(3);
  const formattedNumber = `0${numberWithoutCountryCode}`;

  return formattedNumber;
}
