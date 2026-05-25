import type { ProjectContent } from "../../types";

export default {
  title: "GuitarTunePro",
  theme: "light",
  tags: ["react", "typescript", "next"],
  live: "https://guitartunepro.com",
  description:
    "GuitarTunePro is a free real-time instrument tuning tool running live in the browser, serving 1,000+ active users every month.<br/><br/>I built the full pitch detection engine from scratch using the Web Audio API, with sub-cent accuracy and instant response — no plugins, no installs, just open and tune.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/guitartunnerpro.png",
        alt: "GuitarTunePro App Screenshot",
        caption: "GuitarTunePro — Echtzeit-Instrument-Stimmgerät",
      },
    },
  ],
} as const satisfies ProjectContent;
