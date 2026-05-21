export interface Bake {
  id: string
  name: string
  description?: string
  images: string[]
}

export const INITIAL_BAKES: Bake[] = [
  {
    id: "tiramisu",
    name: "Tiramisu",
    images: [
      "/images/creations/tiramisu/tiramisu-1.jpeg",
    ],
  },
  {
    id: "ube-macarons",
    name: "Ube Macarons",
    images: [
      "/images/creations/ube-macarons/ube-macarons-1.jpeg",
      "/images/creations/ube-macarons/ube-macarons-2.jpeg",
    ],
  },
  {
    id: "japanese-milk-bun",
    name: "Japanese Milk Bun",
    images: [
      "/images/creations/japanese-milk-bun/japanese-milk-bun-1.jpeg",
    ],
  },
  {
    id: "egg-tart",
    name: "Egg Tart",
    images: ["/images/creations/egg-tart/egg-tart-1.jpg"],
  },
  {
    id: "churros",
    name: "Churros",
    images: ["/images/creations/churros/churros-1.jpg"],
  },
  {
    id: "cream-puffs",
    name: "Cream Puffs",
    images: [
      "/images/creations/cream-puffs/cream-puff-1.jpeg",
      "/images/creations/cream-puffs/cream-puff-2.jpeg",
    ],
  },
  {
    id: "cheese-tart",
    name: "Cheese Tart",
    images: [
      "/images/creations/cheese-tart/cheese-tart-1.JPG",
      "/images/creations/cheese-tart/cheese-tart-2.jpeg",
    ],
  },
  {
    id: "apple-pie",
    name: "Apple Pie",
    images: [
      "/images/creations/apple-pie/apple-pie-1.jpeg",
      "/images/creations/apple-pie/apple-pie-2.JPG",
    ],
  },
  {
    id: "gochujang-cookies",
    name: "Gochujang Cookies",
    images: [
      "/images/creations/gochujang-cookies/gochujang-cookies-1.jpeg",
      "/images/creations/gochujang-cookies/gochujang-cookies-2.jpeg",
    ],
  },
]

export const DEFAULT_BAKE_IMAGE = INITIAL_BAKES[0].images[0]
