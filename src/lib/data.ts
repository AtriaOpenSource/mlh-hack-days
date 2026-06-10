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

export interface SponsorCategory {
  title: string;
  sponsors: Sponsor[];
}

export interface SponsorsData {
  platinum: SponsorCategory;
  gold: SponsorCategory;
  silver: SponsorCategory;
  ecosystem: SponsorCategory;
}

export const sponsorsData: SponsorsData = {
  platinum: {
    title: "PLATINUM_TIER",
    sponsors: [
      {
        name: "Major League Hacking",
        src: "/mlh.png",
        alt: "MLH Logo",
        width: 1000,
        height: 1000,
        label: "League Sponsor",
        description:
          "The global hacker community powering student-led innovation across thousands of institutions.",
      },
    ],
  },
  gold: {
    title: "GOLD_TIER",
    sponsors: [
      {
        name: "n8n",
        src: "/n8n.png",
        alt: "n8n Logo",
        width: 1000,
        height: 1000,
        label: "Automation Partner",
      },
      {
        name: "Render",
        src: "/Render.png",
        alt: "Render Logo",
        width: 1000,
        height: 1000,
        label: "Deployment Partner",
      },
      {
        name: "HulChul",
        src: "/HulChul.png",
        alt: "HulChul Logo",
        width: 1000,
        height: 1000,
        label: "Referral Partner",
      },
      {
        name: "Spotme",
        src: "/Spotme.png",
        alt: "Spotme Logo",
        width: 1000,
        height: 400,
        label: "Media Partner",
      },
      {
        name: "Red Bull",
        src: "/Red_Bull.png",
        alt: "Red Bull Logo",
        width: 1000,
        height: 300,
        label: "Refreshment Partner",
      },
      {
        name: "The Atria Foundation",
        src: "/Atria_Foundation.png",
        alt: "The Atria Foundation Logo",
        width: 1000,
        height: 200,
        label: "Food Partner",
      },
    ],
  },
  silver: {
    title: "SILVER_TIER",
    sponsors: [
      {
        name: "HackCulture",
        src: "/hackculture.png",
        alt: "HackCulture Logo",
        width: 1000,
        height: 1000,
        label: "HackCulture",
      },
    ],
  },
  ecosystem: {
    title: "ECOSYSTEM_PARTNERS",
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
};
