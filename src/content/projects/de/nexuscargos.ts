import type { ProjectContent } from "../../types";

export default {
  title: "Nexus Cargos",
  theme: "dark",
  tags: ["next", "react"],
  live: "https://www.nexuscargos.com/",
  description:
    "Nexus Cargos ist eine professionelle Logistik- und Speditionsplattform, die entwickelt wurde, um globale Frachtoperationen, Sendungsmanagement und Kundenkommunikation zu optimieren.<br/><br/>Ich übernahm das vollständige UI/UX-Design, die Frontend- und Backend-Entwicklung sowie die Performance-Optimierung — und lieferte eine moderne, responsive Website mit Frachtservice-Übersichten, einem Sendungsanfragesystem und einer SEO-freundlichen, skalierbaren Architektur.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/nexuscargos.png",
        alt: "Nexus Cargos Website Screenshot",
        caption: "Nexus Cargos — Globale Logistik- & Speditionsplattform",
      },
    },
  ],
} as const satisfies ProjectContent;
