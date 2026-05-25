import type { ProjectContent } from "../../types";

export default {
  title: "Microservices E-Commerce Platform",
  theme: "dark",
  tags: ["next", "kafka"],
  description:
    "A microservices-based e-commerce platform built as the EAD module project, with a distributed architecture spanning multiple independent services.<br/><br/>I led the team and drove the full design and development — event-driven communication via Kafka, Keycloak-based authentication and authorization, containerised deployments with Docker, and a Next.js storefront backed by Spring Boot services, MySQL, and MongoDB.",
} as const satisfies ProjectContent;
