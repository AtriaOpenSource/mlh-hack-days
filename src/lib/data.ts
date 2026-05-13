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
        width: 240,
        height: 120,
        description: "The global hacker community powering student-led innovation across thousands of institutions.",
      }, {
        name: "HackCulture",
        src: "/hackculture.png",
        alt: "HackCulture Logo",
        width: 180,
        height: 90,
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
        width: 100,
        height: 50,
      },
      {
        name: "AWS SBG",
        src: "/aws-sbg.png",
        alt: "AWS SBG Logo",
        width: 110,
        height: 55,
      },
      {
        name: "OSCode",
        src: "/oscode.png",
        alt: "OSCode Logo",
        width: 110,
        height: 55,
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
