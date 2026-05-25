import type { ProjectContent } from "../../types";

export default {
  title: "LyricBase",
  theme: "dark",
  tags: ["flutter", "firebase"],
  description:
    "LyricBase is a platform that helps you explore, sing and share lyrics. This individual project includes a built-in lyric search, user profile management, and chord discovery for any song.<br/><br/>Users can share their own lyrics with the community. The app also features full offline support — lyrics and chords can be downloaded for use without an internet connection.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projectImages/lyricbase.webp",
        alt: "LyricBase mobile app screenshot",
        caption: "LyricBase — Explore, Sing and Share Lyrics",
        portrait: true,
      },
    },
  ],
} as const satisfies ProjectContent;
