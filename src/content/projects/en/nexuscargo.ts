import type { ProjectContent } from "../../types";

export default {
  title: "NexusCargoSync",
  theme: "light",
  tags: ["react", "typescript", "node", "postgresql", "azure"],
  live: "https://www.nexuscargosync.com/signin",
  description:
    "NexusCargoSync is a modern logistics management and digital control tower platform built to streamline cargo operations, shipment documentation, tracking, and logistics workflows through a centralised digital system.<br/><br/>I handled the complete design and development lifecycle — UI/UX, frontend and backend, system architecture, responsive dashboard interfaces, and workflow automation — delivering a scalable platform that improves operational visibility and simplifies complex logistics processes.<br/><br/>Key features include:<br/>• Logistics management dashboard and digital control tower<br/>• Shipment and cargo tracking system<br/>• Digital document management<br/>• Workflow automation and real-time operational visibility<br/>• Secure authentication system<br/>• Mobile-friendly, cloud-ready, scalable architecture",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/nexuscargosync.png",
        alt: "NexusCargoSync platform screenshot",
        caption: "NexusCargoSync — Logistics management & digital control tower",
      },
    },
  ],
} as const satisfies ProjectContent;
