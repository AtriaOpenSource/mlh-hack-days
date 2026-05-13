export interface Sponsor {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
  link?: string;
  label?: string; // e.g., "League Sponsor", "Hackathon Sponsor"
}

export interface SponsorSection {
  id: string;
  title: string;
  icon: any; // Lucide icon name or component
  color: string;
  sponsors: Sponsor[];
  layout: "featured" | "grid" | "small-grid";
}

export const sponsorsData = {
  platinum: {
    title: "PLATINUM_SPONSORS",
    sponsors: [
      {
        name: "Major League Hacking",
        src: "/mlh.png",
        alt: "MLH Logo",
        width: 1000,
        height: 1000,
        label: "League Sponsor",
        description: "The global hacker community powering student-led innovation across thousands of institutions.",
      },
      {
        name: "HackCulture",
        src: "/hackculture.png",
        alt: "HackCulture Logo",
        width: 1000,
        height: 1000,
        label: "Hackathon Sponsor",
      },
    ],
  },
  gold: {
    title: "GOLD_SPONSORS",
    sponsors: [

      {
        name: "AWS SBG",
        src: "/aws-sbg.png",
        alt: "AWS SBG Logo",
        width: 1000,
        height: 1000,
        label: "Ecosystem Partner",
      },
      {
        name: "OSCode",
        src: "/oscode.png",
        alt: "OSCode Logo",
        width: 1000,
        height: 1000,
        label: "Ecosystem Partner",
      },
    ],
  },
  silver: {
    title: "SILVER_SPONSORS",
    sponsors: [
      {
        name: "Atria Institute of Technology",
        src: "/College.png",
        alt: "Atria Institute of Technology",
        width: 1000,
        height: 1000,
        label: "Venue Partner",
      },
    ],
  },
};

