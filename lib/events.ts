export interface Event {
  id: string
  name: string
  description: string
  images: string[]
}

export const EVENTS: Event[] = [
  {
    id: "thanksgiving-potluck",
    name: "Thanksgiving Potluck",
    description: "classic and pumpkin spice with maple glaze salt bread",
    images: [
      "/images/events/thanksgiving-potluck/thanksgiving-potluck-1.jpg",
      "/images/events/thanksgiving-potluck/thanksgiving-potluck-2.jpg",
      "/images/events/thanksgiving-potluck/thanksgiving-potluck-3.jpeg",
      "/images/events/thanksgiving-potluck/thanksgiving-potluck-4.jpeg",
    ],
  },
  {
    id: "housewarming",
    name: "Housewarming",
    description: "a variety of sweet and savory treats",
    images: [
      "/images/events/housewarming/housewarming-1.jpg",
      "/images/events/housewarming/housewarming-2.jpg",
      "/images/events/housewarming/housewarming-3.jpg",
      "/images/events/housewarming/housewarming-4.JPG",
    ],
  },
  {
    id: "my-birthday-pt-1",
    name: "My Birthday Pt 1",
    description: "red velvet cake and apple crumble",
    images: [
      "/images/events/my-birthday-pt-1/birthday-1-1.JPG",
      "/images/events/my-birthday-pt-1/birthday-1-2.JPG",
      "/images/events/my-birthday-pt-1/birthday-1-3.jpg",
    ],
  },
  {
    id: "my-birthday-pt-2",
    name: "My Birthday Pt 2",
    description: "pandan chiffon cake (and lil smiskis)",
    images: [
      "/images/events/my-birthday-pt-2/birthday-2-1.jpeg",
      "/images/events/my-birthday-pt-2/birthday-2-2.jpg",
      "/images/events/my-birthday-pt-2/birthday-2-3.jpg",
    ],
  },
  {
    id: "tiramisu-parties",
    name: "Tiramisu Parties",
    description: "lots and lots of tiramisu",
    images: [
      "/images/events/tiramisu-parties/tiramisu-1.JPG",
      "/images/events/tiramisu-parties/tiramisu-2.jpg",
      "/images/events/tiramisu-parties/tiramisu-3.jpg",
    ],
  },
]
