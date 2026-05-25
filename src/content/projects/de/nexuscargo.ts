import type { ProjectContent } from "../../types";

export default {
  title: "NexusCargoSync",
  theme: "light",
  tags: ["react", "typescript", "node", "postgresql", "azure"],
  live: "https://www.nexuscargosync.com/signin",
  description:
    "NexusCargoSync ist eine moderne Logistikmanagement- und digitale Kontrollturm-Plattform, die Frachtoperationen, Sendungsdokumentation, Tracking und Logistik-Workflows durch ein zentralisiertes digitales System optimiert.<br/><br/>Ich übernahm den gesamten Design- und Entwicklungszyklus — UI/UX, Frontend und Backend, Systemarchitektur, responsive Dashboard-Oberflächen und Workflow-Automatisierung — und lieferte eine skalierbare Plattform, die die operative Transparenz verbessert und komplexe Logistikprozesse vereinfacht.<br/><br/>Hauptfunktionen umfassen:<br/>• Logistik-Management-Dashboard und digitaler Kontrollturm<br/>• Sendungs- und Frachtverfolgungssystem<br/>• Digitales Dokumentenmanagement<br/>• Workflow-Automatisierung und Echtzeit-Betriebstransparenz<br/>• Sicheres Authentifizierungssystem<br/>• Mobilfreundliche, cloud-fähige, skalierbare Architektur",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/nexuscargosync.png",
        alt: "NexusCargoSync Plattform Screenshot",
        caption: "NexusCargoSync — Logistikmanagement & digitaler Kontrollturm",
      },
    },
  ],
} as const satisfies ProjectContent;
