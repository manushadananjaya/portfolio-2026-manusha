import type { ProjectContent } from "../../types";

export default {
  title: "Nexus Cargos",
  theme: "dark",
  tags: ["next", "react"],
  live: "https://www.nexuscargos.com/",
  description:
    "Nexus Cargos is a professional logistics and freight forwarding platform built to streamline global cargo operations, shipment management, and customer communication.<br/><br/>I handled the complete UI/UX design, frontend and backend development, and performance optimisation — delivering a modern, responsive website with freight service showcases, a shipment inquiry system, and SEO-friendly architecture built for scale.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/nexuscargos.png",
        alt: "Nexus Cargos website screenshot",
        caption: "Nexus Cargos — Global logistics & freight forwarding platform",
      },
    },
  ],
} as const satisfies ProjectContent;
