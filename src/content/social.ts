export const social = [
  { url: "mailto:manushad.official@gmail.com", name: "mail" },
  { url: "https://github.com/manushadananjaya", name: "github" },
  { url: "https://linkedin.com/in/manusha-dananjaya", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
