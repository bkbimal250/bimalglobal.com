export type PresenceLocation = {
  address: string | null;
  city: string | null;
  contact: string | null;
  country: "India" | "Nepal";
  imagePath: string;
  mapCoordinates: {
    latitude: number;
    longitude: number;
  } | null;
  officeName: string | null;
  status: "Operational presence and technology delivery";
};

export const presenceLocations: PresenceLocation[] = [
  {
    country: "India",
    status: "Operational presence and technology delivery",
    city: null,
    officeName: null,
    address: null,
    contact: null,
    mapCoordinates: null,
    imagePath: "/images/home/presence/india.jpg",
  },
  {
    country: "Nepal",
    status: "Operational presence and technology delivery",
    city: null,
    officeName: null,
    address: null,
    contact: null,
    mapCoordinates: null,
    imagePath: "/images/home/presence/nepal.jpg",
  },
];

export const offices = [] as const;
