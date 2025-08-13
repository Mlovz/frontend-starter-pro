export type CalcInput = {
  destination: string;
  travelers: number;
  nights: number;
  hotelClass: 'budget'|'comfort'|'luxury';
  flights: boolean;
  activitiesLevel: 'light'|'standard'|'premium';
};

const basePerNight: Record<string, number> = {
  'Kyoto, Japan': 120,
  'Amalfi, Italy': 180,
  'Reykjavík, Iceland': 200,
  'Bali, Indonesia': 90,
  'Santorini, Greece': 170,
  'Cappadocia, Türkiye': 110,
  'Custom': 120
};

const hotelMultiplier = { budget: 1, comfort: 1.5, luxury: 2.5 };
const activitiesPerDay = { light: 20, standard: 60, premium: 120 };

export function estimate(input: CalcInput) {
  const base = basePerNight[input.destination] ?? basePerNight['Custom'];
  const lodging = base * hotelMultiplier[input.hotelClass] * input.nights * input.travelers;
  const activities = activitiesPerDay[input.activitiesLevel] * input.nights * input.travelers;
  const meals = 35 * input.nights * input.travelers;
  const local = 15 * input.nights * input.travelers;
  const flights = input.flights ? 350 * input.travelers : 0;

  const subtotal = lodging + activities + meals + local + flights;
  const service = subtotal * 0.08; // planning fee
  const total = Math.round(subtotal + service);

  return {
    breakdown: { lodging, activities, meals, local, flights, service },
    total
  }
}
