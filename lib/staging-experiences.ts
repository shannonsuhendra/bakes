export interface StagingExperience {
  id: string
  venue: string
  date: string
  description: string
  images: string[]
  imagePosition: "left" | "right"
}

export const STAGING_EXPERIENCES: StagingExperience[] = [
  {
    id: "jakarta",
    venue: "Baked at Jakarta",
    date: "Jan 14–15, 2026",
    description:
      "At Baked, I experienced my first full-scale bakery environment, gaining insight into the rhythm and operations behind a busy pastry kitchen. Working alongside the pastry team, I helped shape and assemble croissants, from classic pain au chocolat to more creative flavors. It was also my first time using a dough sheeter and learning cross lamination—an introduction to the technique and craftsmanship behind laminated pastries.",
    images: [
      "/images/staging/baked/baked-1.jpg",
      "/images/staging/baked/baked-2.jpg",
      "/images/staging/baked/baked-3.jpeg",
      "/images/staging/baked/baked-4.jpeg",
      "/images/staging/baked/baked-5.jpeg",
      "/images/staging/baked/baked-6.jpeg",
    ],
    imagePosition: "right",
  },
  {
    id: "bali",
    venue: "ilgoloso at Bali",
    date: "June 9, 2021",
    description:
      "At Il Goloso, I had the opportunity to dive into the full craft of tiramisu—learning every step from the ground up. From baking delicate ladyfingers to making mascarpone cheese from scratch, this experience deepened my appreciation for the precision and care behind classic Italian desserts. It’s now my favorite thing to bake, and I love sharing full trays of tiramisu with friends and family.",
    images: [
      "/images/staging/ilgoloso/ilgoloso-1.jpeg",
      "/images/staging/ilgoloso/ilgoloso-2.jpg",
      "/images/staging/ilgoloso/ilgoloso-3.jpeg",
    ],
    imagePosition: "left",
  },
]
