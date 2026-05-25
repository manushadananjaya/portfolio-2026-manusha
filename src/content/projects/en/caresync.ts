import type { ProjectContent } from "../../types";

export default {
  title: "CareSync",
  theme: "dark",
  tags: ["flutter", "firebase"],
  description:
    "CareSync is a medical app that connects doctors and patients, featuring an admin dashboard for doctor verification via medical IDs. It includes step and breath counters, medical report management, and more.<br/><br/>I contributed to the authentication process, including verification screens, OTP password resets, and dashboard screens.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/caresync.webp",
        alt: "CareSync mobile app screenshot",
        caption: "CareSync — Connect with your personal Doctor",
        portrait: true,
      },
    },
  ],
} as const satisfies ProjectContent;
