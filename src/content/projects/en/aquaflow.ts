import type { ProjectContent } from "../../types";

export default {
  title: "Aquaflow",
  theme: "light",
  tags: ["react", "next"],
  live: "https://www.aquaflow.lk/",
  description:
    "Aquaflow is a modern bottled water supplier agency website designed to establish a strong digital presence and improve customer engagement for the brand.<br/><br/>I delivered the full design and development — responsive UI/UX, frontend and backend integration, product and service showcase, contact and inquiry system, and performance optimisation — resulting in a clean, fast, and mobile-friendly platform across all devices.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/aquaflow.png",
        alt: "Aquaflow website screenshot",
        caption: "Aquaflow — Bottled water supplier agency website",
      },
    },
  ],
} as const satisfies ProjectContent;
