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
      "/bakes/images/creations/tiramisu/tiramisu-1.jpeg",
    ],
  },
  {
    id: "ube-macarons",
    name: "Ube Macarons",
    images: [
      "/bakes/images/creations/ube-macarons/ube-macarons-1.jpeg",
      "/bakes/images/creations/ube-macarons/ube-macarons-2.jpeg",
    ],
  },
  {
    id: "japanese-milk-bun",
    name: "Japanese Milk Bun",
    images: [
      "/bakes/images/creations/japanese-milk-bun/japanese-milk-bun-1.jpeg",
    ],
  },
  {
    id: "egg-tart",
    name: "Egg Tart",
    images: ["/bakes/images/creations/egg-tart/egg-tart-1.jpg"],
  },
  {
    id: "churros",
    name: "Churros",
    images: ["/bakes/images/creations/churros/churros-1.jpg"],
  },
  {
    id: "cream-puffs",
    name: "Cream Puffs",
    images: [
      "/bakes/images/creations/cream-puffs/cream-puff-1.jpeg",
      "/bakes/images/creations/cream-puffs/cream-puff-2.jpeg",
    ],
  },
  {
    id: "cheese-tart",
    name: "Cheese Tart",
    images: [
      "/bakes/images/creations/cheese-tart/cheese-tart-1.JPG",
      "/bakes/images/creations/cheese-tart/cheese-tart-2.jpeg",
    ],
  },
  {
    id: "apple-pie",
    name: "Apple Pie",
    images: [
      "/bakes/images/creations/apple-pie/apple-pie-1.jpeg",
      "/bakes/images/creations/apple-pie/apple-pie-2.JPG",
    ],
  },
  {
    id: "gochujang-cookies",
    name: "Gochujang Cookies",
    images: [
      "/bakes/images/creations/gochujang-cookies/gochujang-cookies-1.jpeg",
      "/bakes/images/creations/gochujang-cookies/gochujang-cookies-2.jpeg",
    ],
  },
]

export const DEFAULT_BAKE_IMAGE = INITIAL_BAKES[0].images[0]
