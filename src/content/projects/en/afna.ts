import type { ProjectContent } from "../../types";

export default {
  title: "AFNA.ai",
  theme: "dark",
  tags: ["next", "node", "postgresql"],
  live: "https://afna.ai",
  description:
    "AFNA.ai is a freight negotiation and logistics management platform built for NexusCargos.<br/><br/>I designed and built the end-to-end system — multi-carrier rate comparison, real-time shipment tracking, and automated negotiation workflows — shipped to production as a fully operational platform serving live freight traffic.",
} as const satisfies ProjectContent;
