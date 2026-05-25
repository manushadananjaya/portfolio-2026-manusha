import type { ProjectContent } from "../../types";

export default {
  title: "CareSync",
  theme: "dark",
  tags: ["flutter", "firebase"],
  description:
    "CareSync ist eine medizinische App, die Ärzte und Patienten verbindet und ein Admin-Dashboard zur Arztverifizierung über Arztausweise bietet. Sie enthält Schritt- und Atemzähler, Verwaltung medizinischer Berichte und mehr.<br/><br/>Ich habe zum Authentifizierungsprozess beigetragen, einschließlich Verifizierungsbildschirme, OTP-Passwortzurücksetzung und Dashboard-Bildschirme.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/caresync.webp",
        alt: "CareSync Mobile-App Screenshot",
        caption: "CareSync — Mit Ihrem persönlichen Arzt verbinden",
        portrait: true,
      },
    },
  ],
} as const satisfies ProjectContent;
