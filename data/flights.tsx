export interface FlightData {
  id: string;
  title: string;
  description: string;
  price: number;
  subCharges: number;
}

export const Flights: FlightData[] = [
  {
    id: '1',
    title: 'Discovery Flight-Cessna 172',
    description: `Start your aviation journey with a one-on-one Discovery Flight. Guided by a certified flight instructor, you'll experience the excitement of flying, take the controls, and see if becoming a pilot is right for you.`,
    price: 189.99,
    subCharges: 6.97,
  },
  {
    id: '2',
    title: 'Premium Discovery Flight – Tecnam P2010',
    description: `Take your first flight in the advanced Tecnam P2010, designed for comfort and performance. Enjoy personalized instruction from a certified flight instructor and experience the thrill of flying from the pilot's seat.`,
    price: 249.99,
    subCharges: 10.22,
  },
];
