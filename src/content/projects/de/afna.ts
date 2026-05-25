import type { ProjectContent } from "../../types";

export default {
  title: "AFNA.ai",
  theme: "dark",
  tags: ["next", "react", "node", "postgresql"],
  live: "https://afna.ai",
  description:
    "AFNA ist eine KI-gestützte Frachtvermittlungs- und Logistikmanagementsoftware, die Buchung, Trägerkommunikation, Frachtpreisvergleich und Echtzeit-Logistikoperationen durch intelligente Automatisierung vereinfacht.<br/><br/>Ich übernahm das vollständige UI/UX-Design, die Frontend- und Backend-Entwicklung, Systemarchitektur, Cloud-Integration und Performance-Optimierung — und baute eine skalierbare Plattform, die Logistikteams mit verifizierten Transportunternehmen und Echtzeitpreisen verbindet.<br/><br/>Hauptfunktionen umfassen:<br/>• KI-gestütztes Frachtvermittlungssystem<br/>• Echtzeit-Sendungsverfolgung<br/>• Live-Frachtpreisvergleich und verifiziertes Carrier-Management<br/>• Sofortige Buchung und automatisierte Logistik-Workflows<br/>• Erweiterte Analysen und Berichte<br/>• Sichere, cloud-fähige, hochperformante Architektur",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/afna.png",
        alt: "AFNA.ai Plattform Screenshot",
        caption: "AFNA.ai — KI-gestützte Frachtvermittlungsplattform",
      },
    },
  ],
} as const satisfies ProjectContent;
