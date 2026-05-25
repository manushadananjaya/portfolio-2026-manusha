import type { ProjectContent } from "../../types";

export default {
  title: "Microservices E-Commerce Platform",
  theme: "dark",
  tags: ["next", "kafka"],
  description:
    "Eine Microservices-basierte E-Commerce-Plattform, entwickelt als EAD-Modulprojekt mit verteilter Architektur aus unabhängigen Services.<br/><br/>Ich leitete das Team und verantwortete das gesamte Design und die Entwicklung — ereignisgesteuerte Kommunikation über Kafka, Keycloak-basierte Authentifizierung, containerisierte Deployments mit Docker sowie ein Next.js-Storefront, das von Spring Boot-Services, MySQL und MongoDB unterstützt wird.",
} as const satisfies ProjectContent;
