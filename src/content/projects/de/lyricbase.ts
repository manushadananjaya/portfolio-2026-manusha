import type { ProjectContent } from "../../types";

export default {
  title: "LyricBase",
  theme: "dark",
  tags: ["flutter", "firebase"],
  description:
    "LyricBase ist eine Plattform, die Ihnen hilft, Liedtexte zu entdecken, zu singen und zu teilen. Dieses Einzelprojekt enthält eine integrierte Liedtextsuche, Benutzerprofilverwaltung und Akkordsuche für beliebige Songs.<br/><br/>Nutzer können eigene Liedtexte mit der Community teilen. Die App bietet außerdem vollständige Offline-Unterstützung — Liedtexte und Akkorde können für die Nutzung ohne Internetverbindung heruntergeladen werden.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/lyricbase.webp",
        alt: "LyricBase Mobile-App Screenshot",
        caption: "LyricBase — Liedtexte entdecken, singen und teilen",
        portrait: true,
      },
    },
  ],
} as const satisfies ProjectContent;
