import asset from "./asset.js";

export const PROJECTS = [
  {
    slug: "Moonzy",
    src: asset("/assets/images/Moonzy-project.jpg"),
    alt: "Moonzy",
    title: "Moonzy: The Far Side of the Moon",
    year: "2025 — 2026",
    role: "Environment Modeling, Texturing, Layout, 3D Animation, FX / Dynamics",
    scope: "Sequence delivery",
    description: [
      'Luntik: The Far Side of the Moon is an animated adventure based on the series "Luntik and His Friends." ' +
        "Luntik lives happily with his mother on the Moon and regularly visits his friends on Earth. " +
        "When he learns that his father disappeared on the Moon's far side, he sets out with his friends to find him. " +
        "It is a story about family, friendship, and the courage to explore the unknown.",
    ],
  },
  {
    slug: "buratino-2025",
    src: asset("/assets/images/project-buratino.jpg"),
    alt: "Buratino 2025",
    title: "Buratino",
    year: "2025",
    role: "Layout & 3D Animation",
    scope: "Sequence delivery",
    link: "https://www.youtube.com/watch?v=9XNkWa8pYto",
    description: [
      "Buratino is a musical fairy tale based on Alexey Tolstoy's 'The Golden Key, or The Adventures of Buratino' and its literary inspiration, Carlo Collodi's 'The Adventures of Pinocchio.'",
      "At the heart of the story is a wooden boy who comes to life and whom Papa Carlo welcomes as his own son.",
      "Searching for his place in the world, Buratino finds himself at Karabas's theatre, where he makes friends and faces dangers.",
      "It is a story about family, friendship, and self-acceptance.",
    ],
  },
  {
    slug: "Masha & The Bear",
    src: asset("/assets/images/project-02.jpg"),
    alt: "Masha & The Bear",
    title: "Masha & The Bear",
    year: "2023 - present",
    role: "Modeling, Rigging, Texturing, Layout, 3D Animation",
    scope: "Asset production",
    link: "https://www.youtube.com/watch?v=S45nF8zo0Zo",
    description: [
      "Masha and the Bear is a comedy animated series for preschoolers, based on the folk tale of the same name. The series follows the adventures of a little girl, Masha, and her caring friend, a bear (whom she calls Mishka), who always protects her from adversity.",
    ],
  },
  {
    slug: "Moonzy-project",
    src: asset("/assets/images/project-luntik.jpg"),
    alt: "Luntik",
    title: "Moonzy: Homecoming",
    year: "2024 — 2025",
    role: "3D Animation",
    link: "https://www.youtube.com/watch?v=vu0IsVKyJXQ",
    scope: "Episodic production",
    description: [
      "Luntik: Returning Home is a Russian animated adventure based on the series 'Luntik and His Friends.' It follows Luntik as he sets out to find his mother and return to the Moon. With the help of his friends, he faces challenges and discovers how courage and kindness can guide him on his journey. It is a story about friendship, family, and the longing to find home.",
    ],
  },
  {
    slug: "komnata",
    src: asset("/assets/images/project-01.jpg"),
    alt: "Komnata",
    title: "Secret Room",
    year: "2024",
    role: "3D Animation",
    scope: "Full production cycle",
    description: [
      "\u201cThe Secret Room\u201d is a Russian animated series that introduces children to Jewish culture and traditions through magical adventures. " +
        "It follows three siblings, Dina, Danya, and Yasha, who discover a mysterious room hidden in their home. " +
        "Inside, they explore a world of wonders, solve puzzles, and find answers to questions from their everyday lives. " +
        "It is a story about family, curiosity, kindness, and discovering your cultural heritage.",
    ],
  },
  {
    slug: "barboskiny-2",
    src: asset("/assets/images/project-barboskiny.jpg"),
    alt: "The Barkers",
    title: "The Barkers: Mind the Cats",
    year: "2020-2021",
    role: "3D animation",
    link: "https://www.youtube.com/watch?v=dNf9iNaZwAg",
    scope: "Sequence delivery",
    description: [
      "Barboskiny at the Dacha is an animated family adventure based on the Barboskiny series. " +
        "The siblings head to their grandfather's country house, where the youngest hopes to spend time playing with his older brothers and sisters. " +
        "Feeling left out, he befriends two mischievous cats who secretly plan to steal his brother's invention. " +
        "Their countryside holiday becomes an adventure about friendship, family, and the importance of looking out for one another.",
    ],
  },
  {
    slug: "tsarevny",
    src: asset("/assets/images/project-tsarevny.jpg"),
    alt: "Tsarevny",
    title: "Tsarevny",
    year: "2022",
    role: "3D Animation",
    link: "https://www.youtube.com/watch?v=G53HQAh0BFA&list=RDG53HQAh0BFA&start_radio=1",
    scope: "Episodic production",
    description: [
      "Tsarevny is a Russian animated series inspired by the heroines of Russian folk tales.",
      "It follows five young princesses who arrive at a magical school run by Koschei the Immortal on the mysterious island of Divnogorye.",
      "As they learn to use their powers, the girls face magical challenges, go on adventures, and discover the value of teamwork.",
      "It is a story about friendship, courage, and believing in yourself.",
    ],
  },
  // {
  //   slug: "barboskiny-team",
  //   src: asset("/assets/images/project-barboskiny-team.jpg"),
  //   alt: "Barboskiny — Team",
  //   title: "Barboskiny — Team",
  //   meta: "Feature · Full production cycle",
  //   year: "2025",
  //   role: "Art direction,3D animation, lighting, render",
  //   scope: "End-to-end production",
  //   description: [
  //     "The project where we ran the whole pipeline ourselves, from first boards to final frames. Neon, motion, a lot of moving parts in every shot.",
  //     "Art direction, layout, animation, lookdev, lighting and comp all sat with our team. Owning the full chain meant we could push the look far past what a single-stage vendor could deliver.",
  //   ],
  // },
];

export const findProject = (slug) => PROJECTS.findIndex((p) => p.slug === slug);

export const youtubeEmbed = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};
