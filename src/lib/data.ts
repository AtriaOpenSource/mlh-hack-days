export interface Sponsor {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
  link?: string;
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
  league: {
    title: "LEAGUE_PARTNER",
    sponsors: [
      {
        name: "Major League Hacking",
        src: "/mlh.png",
        alt: "MLH Logo",
        width: 1000,
        height: 1000,
        description: "The global hacker community powering student-led innovation across thousands of institutions.",
      }, {
        name: "HackCulture",
        src: "/hackculture.png",
        alt: "HackCulture Logo",
        width: 1000,
        height: 1000,
      },
    ],
  },
  platinum: {
    title: "PLATINUM_SPONSORS",
    sponsors: [

    ],
  },
  ecosystem: {
    title: "ECOSYSTEM_PARTNERS",
    sponsors: [
      {
        name: "AWS",
        src: "/aws.png",
        alt: "AWS Logo",
        width: 1000,
        height: 1000,
      },
      {
        name: "AWS SBG",
        src: "/aws-sbg.png",
        alt: "AWS SBG Logo",
        width: 1000,
        height: 1000,
      },
      {
        name: "OSCode",
        src: "/oscode.png",
        alt: "OSCode Logo",
        width: 1000,
        height: 1000,
      },
    ],
  },
  venue: {
    title: "VENUE_PARTNER",
    sponsors: [
      {
        name: "Atria Institute of Technology",
        src: "/College.png", // No image, uses text
        alt: "Atria Institute of Technology",
        width: 1000,
        height: 1000,
      },
    ],
  },
};
